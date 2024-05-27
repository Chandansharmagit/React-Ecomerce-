import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function AnotherMain({ product, addToCart }) {
  const [slicedProducts, setSlicedProducts] = React.useState([]);

  React.useEffect(() => {
    if (product) {
      const firstEightProducts = product.slice(12); // Slice the first 8 products
      setSlicedProducts(firstEightProducts);
    }
  }, [product]); // Update slicedProducts when product changes

  return (
    <div>
      <div className="grid-container">
        {slicedProducts.length > 0 ? (
          slicedProducts.map((product) => (
            <div key={product.id} className="card">
              <h6>
                <span className="badge badge-secondary">New arrived</span>
              </h6>
              <div className="img-container">
                <Link to={`/products/${product.id}`}>
                  <img src={product.img} alt="" className="image" />
                </Link>
              </div>
              <p>{product.name}</p>
              <p>Rs.{product.price}</p>
              <Link to={`/products/${product.id}`}>
                <button className="addtocart">View Product</button>
              </Link>
            </div>
          ))
        ) : (
          <p>Loading products...</p>
        )}
      </div>
    </div>
  );
}

export default AnotherMain;
