import React from "react";
import Product from "../Product/Product";

const ProductsPage = ({ products }) => {
  return (
    <div>
      <Product products={products} />
    </div>
  );
};

export default ProductsPage;
