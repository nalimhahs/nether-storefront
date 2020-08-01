import classNames from "classnames";
import * as React from "react";
import ReactSVG from "react-svg";

import { MainMenuSubItem } from "../MainMenu/types/MainMenuSubItem";

import subcategoriesImg from "../../images/subcategories.svg";
import { useState } from "react";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  item: MainMenuSubItem;
}

const NavHeaderLink: React.FC<NavLinkProps> = ({ item, ...props }) => {
  const { name } = item;
  return <span {...props}>{name}</span>;
};

export interface INavItem extends MainMenuSubItem {
  children?: INavItem[];
}

interface NavItemProps extends INavItem {
  hideOverlay(): void;
  showSubItems(item: INavItem): void;
  setActive(item: INavItem): void;
  currentActive: INavItem;
}

const NavItem: React.FC<NavItemProps> = ({
  hideOverlay,
  showSubItems,
  setActive,
  currentActive,
  ...item
}) => {
  const hasSubNavigation = item.children && !!item.children.length;

  return (
    <div
      className={classNames({
        "side-nav__menu-item": true,
        "side-nav__menu-item--has-subnavigation": hasSubNavigation,
      })}
    >
      <NavHeaderLink
        item={item}
        className={classNames({
          "side-nav__menu-item-link": true,
          "sub-active": currentActive.id === item.id,
        })}

        onClick={() => {
          setActive(item);
        }}
      />
      {/* {hasSubNavigation && (
        <ReactSVG
          path={subcategoriesImg}
          className="side-nav__menu-item-more"
          onClick={() => showSubItems(item)}
        />
      )} */}
    </div>
  );
};

export default NavItem;
