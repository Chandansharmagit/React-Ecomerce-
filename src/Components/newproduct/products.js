import React, { useState, useEffect } from "react";
import "./newproduct.css";
import MainImage from "../home/mainImage";
import AnotherMain from "../home/anotherMain";
import { Link } from "react-router-dom";
import Accordian from "../accordian";

function Products({ product }) {
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [filteredProducts, setFilteredProducts] = useState([]);

  // Find the max and min price of the products
  const maxprice = Math.max(...product.map((item) => parseFloat(item.price)));
  const minprice = Math.min(...product.map((item) => parseFloat(item.price)));

  useEffect(() => {
    // Filter products based on the price range
    const filtered = product.filter((item) => {
      const price = parseFloat(item.price);
      return (
        (minPrice === "" || price >= parseFloat(minPrice)) &&
        (maxPrice === "" || price <= parseFloat(maxPrice))
      );
    });
    setFilteredProducts(filtered);
  }, [minPrice, maxPrice, product]);

  return (
    <>
      <div className="new_products_details">
        <div className="row">
          <div className="side">
            <h2>Select your price range</h2>
            <h5>Photo of me:</h5>
            <div className="fakeimg" style={{ height: "200px" }}>
              <div>
                <input
                  type="range"
                  id="volume"
                  name="volume"
                  min='99'
                  max='1000'
                  value={minPrice} // Set value to minPrice
                  onChange={(e) => setMinPrice(e.target.value)}
                />
                <label htmlFor="volume" className="labels-for-price">
                  {minPrice}
                </label>
              </div>
            </div>
            <p>
              Some text about me in culpa qui officia deserunt mollit anim..
            </p>
            <h3>More Text</h3>
            <p>Lorem ipsum dolor sit ame.</p>
            <div className="fakeimg" style={{ height: "60px" }}>
              Image
            </div>
            <br />
            <div className="fakeimg" style={{ height: "60px" }}>
              Image
            </div>
            <br />
            <div className="fakeimg" style={{ height: "60px" }}>
              Image
            </div>
          </div>
          <div className="main">
            <h2>Newly launched products</h2>
            <h5>Title description, Dec 7, 2017</h5>
            <div className="fakeimg">
              <AnotherMain product={filteredProducts} />
            </div>
          </div>
        </div>
      </div>
      <Accordian />
    </>
  );
}

export default Products;
