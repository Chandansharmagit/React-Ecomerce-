import React, { useState } from "react";

import "../css/home.css";

import Accordian from "./accordian";
import Uttam from "./uttam";
import MainImage from "./home/mainImage";
import Almuni from "./alumini/almuni";
import Sliderproducts from "./sliderproducts/slproducts";
import ImageGallery from "./gallary/ImageGallary";

export default function Home({ product, addToCart }) {
  const [searchTerm, setsearchTerm] = useState("");

  return (
    <>
      <div>
        {/* <Slider /> */}
        <Uttam />

        <div className="collection_feature">
          <h3 className="collections-name">
            RECOMMENDED <span>FOR YOU</span>
          </h3>

          <div className="search-for-products">
            <form class="form-inline my-2 my-lg-0">
              <input
                class="form-control mr-sm-2"
                type="search"
                placeholder="Search for products"
                aria-label="Search"
                id="search-pp"
                onChange={(event) => {
                  setsearchTerm(event.target.value);
                }}
              ></input>

              <Sliderproducts product={product} />

              <div className="template-container">
                {product
                  .filter((val) => {
                    if (searchTerm == "") {
                      return;
                    } else if (
                      val.name.toLowerCase().includes(searchTerm.toLowerCase())
                    ) {
                      return val;
                    }
                  })

                  .map((val) => {
                    return (
                      <div className="template" key={val.id}>
                        <div className="flex">
                          {product.map((chandan) => {
                            return (
                              <div style={{ width: "50%" }}>
                                <div className="flex-box">
                                  <div class="card-deck ">
                                    <div class="card ">
                                      <h5>
                                        {" "}
                                        <span class="badge badge-secondary">
                                          New
                                        </span>
                                      </h5>
                                      <img
                                        class="card-img-top"
                                        src={chandan.img}
                                        alt="Card image cap"
                                      ></img>
                                      <div class="card-body">
                                        <h5 class="card-title">
                                          {chandan.name}
                                        </h5>

                                        <h4 className="card-title">
                                          Rs.{chandan.price}
                                        </h4>

                                        <p class="card-text">
                                          <small class="text-muted">
                                            Last updated 3 mins ago
                                          </small>
                                        </p>

                                        <button
                                          className="add"
                                          onClick={() => addToCart(chandan)}
                                        >
                                          add to cart
                                        </button>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    );
                  })}
              </div>
            </form>
            {/* <input class="form-control mr-sm-2" type="search" placeholder="Search for products" aria-label="Search" id='search-pp'></input>
                        <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button> */}
          </div>
          <h3 className="collections-name">
            SHOP <span>NOW</span>
          </h3>
          <p className="take-look">
            Take a look at the newest additions to our modern furniture
            collection
          </p>
        </div>
        <hr />

        <div className="container-pregination"></div>

        <div className="collection_feature">
          <h3 className="collections-name">
            FEATURED <span>PRODUCTS</span>
          </h3>
        </div>
        <hr />
        <MainImage product={product} addToCart={addToCart} />
        <Almuni />
        <Sliderproducts product={product} />

        <Accordian />
      </div>
    </>
  );
}
