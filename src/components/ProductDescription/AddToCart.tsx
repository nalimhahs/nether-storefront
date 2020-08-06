import React from "react";
import ReactSVG from "react-svg";

import AddToCartButton from "./AddToCartButton";
import cartImg from "../../images/cart.svg";

const AddToCart: React.FC<{
  disabled: boolean;
  onSubmit: () => void;
}> = ({ onSubmit, disabled }) => {
  return (
    <AddToCartButton
      className="product-description__action"
      onClick={() => {
        onSubmit();
      }}
      disabled={disabled}
    >
      <span
        style={{
          display: "flex",
          width: "100%",
          justifyContent: "center",
          alignItems: "center",
          margin: "0.2rem 0rem",
          fontSize: "1.3rem"
        }}
      >
        Add to basket
        <ReactSVG path={cartImg} style={{ marginLeft: "1rem" }} />
      </span>
    </AddToCartButton>
  );
};

export default AddToCart;
