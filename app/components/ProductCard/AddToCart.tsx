"use client";
import React from "react";

const AddToCart = () => {
  return (
    <button
      className="btn btn-primary"
      onClick={() => console.log("Add to cart clicked")}
    >
      Add to cart
    </button>
  );
};

export default AddToCart;
