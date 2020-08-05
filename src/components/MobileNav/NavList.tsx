import "./scss/index.scss";

import * as React from "react";
import { Link } from "react-router-dom";
import ReactSVG from "react-svg";

import { NavLink } from "..";

import { baseUrl } from "../../app/routes";
import NavItem, { INavItem } from "./NavItem";

import backImg from "../../images/arrow-back.svg";
import logoImg from "../../images/logo.svg";

interface NavListProps {
  items: INavItem[];
  hideOverlay(): void;
}

interface NavListState {
  parent: INavItem | null;
  displayedItems: INavItem[];
  activeItem: INavItem | null;
}

class NavList extends React.PureComponent<NavListProps, NavListState> {
  state: NavListState = {
    activeItem: this.props.items[0],
    displayedItems: this.props.items,
    parent: null,
  };

  handleShowSubItems = (item: INavItem) => {
    this.setState({ parent: item, displayedItems: item.children });
  };

  handleGoBack = () => {
    const grandparent = this.state.parent.parent;

    if (!grandparent) {
      this.setState({ parent: null, displayedItems: this.props.items });
    } else {
      const newParent = this.findItemById(grandparent.id);
      this.setState({
        displayedItems: newParent.children,
        parent: newParent,
      });
    }
  };

  findItemById(id: string): INavItem {
    let match = null;
    function find(item) {
      if (item.id === id) {
        match = item;
        return true;
      }
      return item.children && item.children.some(find);
    }
    this.props.items.some(find);
    return match;
  }

  changeActive = (item: INavItem) => {
    this.setState({ activeItem: item });
  };

  render() {
    const { hideOverlay } = this.props;
    const { displayedItems, parent } = this.state;
    // console.log(this.state.activeItem.children);
    return (
      <ul>
        {parent ? (
          <li className="side-nav__menu-item side-nav__menu-item-back">
            <span onClick={this.handleGoBack}>
              <ReactSVG path={backImg} /> {parent.name}
            </span>
          </li>
        ) : (
          <>
            <li className="side-nav__menu-item side-nav__menu-item--parent">
              <Link
                to={baseUrl}
                className="side-nav__menu-item-logo"
                onClick={hideOverlay}
              >
                <ReactSVG path={logoImg} />
              </Link>
              <span className="side-nav__menu-item-close" onClick={hideOverlay}>
                <span />
              </span>
            </li>
            {/* <li className="side-nav__menu-item">
              <Link
                to={baseUrl}
                className="side-nav__menu-item-link"
                onClick={hideOverlay}
              >
                Home
              </Link>
            </li> */}
          </>
        )}
        <li className="side-nav__header">
          {displayedItems.map(item => (
            <NavItem
              key={item.id}
              hideOverlay={hideOverlay}
              showSubItems={this.handleShowSubItems}
              currentActive={this.state.activeItem}
              setActive={this.changeActive}
              {...item}
            />
          ))}
        </li>
        <li className="sub-cat">
          {this.state.activeItem !== null
            ? this.state.activeItem.children.map(sub => (
                <NavLink item={sub} key={sub.id}>
                  {sub.name}
                </NavLink>
              ))
            : ""}
        </li>
      </ul>
    );
  }
}

export default NavList;
