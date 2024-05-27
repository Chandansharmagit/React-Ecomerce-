import React, { useRef, useState } from "react";
import { Virtual, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "./sl.css";
import { Link } from "react-router-dom";

export default function Sliderproducts({ product }) {
  const [swiperRef, setSwiperRef] = useState(null);
  const appendNumber = useRef(product.length);
  const prependNumber = useRef(1);

  // Create initial slides based on the product array
  const [slides, setSlides] = useState(
    Array.from({ length: product.length }).map((_, index) => index)
  );

  const prepend = () => {
    setSlides([
      prependNumber.current - 2,
      prependNumber.current - 1,
      ...slides,
    ]);
    prependNumber.current = prependNumber.current - 2;
    swiperRef.slideTo(swiperRef.activeIndex + 2, 0);
  };

  const append = () => {
    setSlides([...slides, appendNumber.current++]);
  };

  const slideTo = (index) => {
    swiperRef.slideTo(index - 1, 0);
  };

  return (
    <>
      <Swiper
        modules={[Virtual, Navigation, Pagination]}
        onSwiper={setSwiperRef}
        slidesPerView={3}
        centeredSlides={true}
        spaceBetween={30}
        pagination={{
          type: "fraction",
        }}
        navigation={true}
        virtual
      >
        {slides.map((slideContent, index) => (
          <SwiperSlide key={index} virtualIndex={index}>
            {product[index] && <Link to='/products'><img src={product[index].img} alt={`Product ${index + 1}`} className="images-slider"/></Link>}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}