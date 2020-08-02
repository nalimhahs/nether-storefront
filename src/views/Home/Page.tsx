import "./scss/index.scss";

import classNames from "classnames";
import * as React from "react";
import { Link } from "react-router-dom";

import { Button, Loader, ProductsFeatured } from "../../components";
import { generateCategoryUrl } from "../../core/utils";

import {
  ProductsList_categories,
  ProductsList_shop,
  ProductsList_shop_homepageCollection_backgroundImage,
} from "./types/ProductsList";

import { structuredData } from "../../core/SEO/Homepage/structuredData";

import noPhotoImg from "../../images/no-photo.svg";

const Page: React.FC<{
  loading: boolean;
  categories: ProductsList_categories;
  backgroundImage: ProductsList_shop_homepageCollection_backgroundImage;
  shop: ProductsList_shop;
}> = ({ loading, categories, backgroundImage, shop }) => {
  const categoriesExist = () => {
    return categories && categories.edges && categories.edges.length > 0;
  };

  return (
    <>
      <script className="structured-data-list" type="application/ld+json">
        {structuredData(shop)}
      </script>

      {/* Start Hero Section */}
      <div className="home-page__hero">
        <div
          className="home-page__hero-img"
          style={
            backgroundImage
              ? // ? { backgroundImage: `url(${backgroundImage.url})` }
                {
                  backgroundImage: `url("https://demo2.wpopal.com/qos/wp-content/uploads/2019/07/rev_sliderhome14_layer2.jpg")`,
                }
              : null
          }
        ></div>
        <div className="home-page__hero-content">
          <div className="home-page__hero-text">
            <div>
              <span className="home-page__hero__title">
                <p>New Collection</p>
              </span>
            </div>
            <div>
              <span className="home-page__hero__title">
                <h1>Respect the Drip</h1>
              </span>
            </div>
            <div>
              <span className="home-page__hero__title">
                <h1>Sale!</h1>
              </span>
            </div>
          </div>
          <div className="home-page__hero-action">
            {loading && !categories ? (
              <Loader />
            ) : (
              categoriesExist() && (
                <Link
                  to={generateCategoryUrl(
                    categories.edges[0].node.id,
                    categories.edges[0].node.name
                  )}
                >
                  <Button>Shop sale</Button>
                </Link>
              )
            )}
          </div>
        </div>
      </div>
      {/* End Hero Section */}

      {categoriesExist() && (
        <div className="home-page__categories">
          <div className="container">
            <h3>Shop by category</h3>
            <div className="home-page__categories__list">
              {categories.edges.map(({ node: category }) => (
                <div key={category.id}>
                  <Link
                    to={generateCategoryUrl(category.id, category.name)}
                    key={category.id}
                  >
                    <div
                      className={classNames(
                        "home-page__categories__list__image",
                        {
                          "home-page__categories__list__image--no-photo": !category.backgroundImage,
                        }
                      )}
                      style={{
                        backgroundImage: `url(${
                          category.backgroundImage
                            ? category.backgroundImage.url
                            : noPhotoImg
                        })`,
                      }}
                    />
                    <span>
                      <h3>{category.name}</h3>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        className="feather feather-arrow-up-right"
                      >
                        <line x1="7" y1="17" x2="17" y2="7" />
                        <polyline points="7 7 17 7 17 17" />
                      </svg>
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      <ProductsFeatured />
    </>
  );
};

export default Page;
