import React from "react";
import ReactSVG from "react-svg";

import cartImg from "../../images/cart.svg";
import AddToCartButton from "./AddToCartButton";

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
          alignItems: "center",
          display: "flex",
          fontSize: "1.3rem",
          justifyContent: "center",
          margin: "0.2rem 0rem",
          width: "100%",
        }}
      >
        Add to Bag
        <ReactSVG path={cartImg} style={{ marginLeft: "1rem" }} />
      </span>
    </AddToCartButton>
  );
};

export default AddToCart;
