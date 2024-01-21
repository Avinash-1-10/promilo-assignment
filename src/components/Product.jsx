import React from "react";

const Product = ({ product }) => {
  const { productCategoryName, productCategoryImage } = product.productCategory;

  return (
    <div className="product-container">
      <img className="category-image" src={productCategoryImage} alt={productCategoryName} />
      <span className="category-name">{productCategoryName}</span>
    </div>
  );
};

export default Product;
