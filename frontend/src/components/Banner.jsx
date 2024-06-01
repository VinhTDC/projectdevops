import React, { useState } from "react";
import BannerItem from "./BannerItem";

export default function Banner(props) {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="banner_section layout_padding">
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-ride="carousel"
      >
        <div className="carousel-inner">
          {props.banners.map((item, index) => (
            <div
              key={index}
              className={`carousel-item ${
                index === activeIndex ? "active" : ""
              }`}
            >
              <BannerItem
                title={item.title}
                description={item.description}
                image={item.image}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
