import React from "react";
export default function ProductItem(props) {
const name = props.name || "Beauty Brush";
    const description = props.description || "Default description";
    const image = props.image || "images/banner-img.png";
    const price = props.price || 0;
    const id = props.id || 1;
  return (
        <div key={id} className="col-lg-3 col-sm-6">
          <div className="product_box">
            <h4 className="bursh_text">{name}</h4>
            <p className="lorem_text">{description}</p>
            <img src={image} className="image_1" alt={name} />
            <div className="btn_main">
              <div className="buy_bt">
                <ul>
                  <li className="active">
                    <a href="#">Buy Now</a>
                  </li>
                  {/* Duplicate Buy Now removed for simplicity */}
                </ul>
              </div>
              <h3 className="price_text">Price ${price}</h3>
            </div>
          </div>
        </div>
  );
}
