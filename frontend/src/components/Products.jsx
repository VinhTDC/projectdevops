import ProductItem from "./ProductItem";
export default function Products(props) {
  return (
    <div className="product_section layout_padding">
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <h1 className="product_taital">Our Products</h1>
            <p className="product_text">
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim
              veniam, quis nostrud exercitation
            </p>
          </div>
        </div>
        <div className="product_section_2 layout_padding">
          <div className="row">
            <div className="product_section_2 layout_padding">
              <div className="row">
                {props.products.map((product) => (
                  <ProductItem
                    key={product.id}
                    id={product.id}
                    name={product.name}
                    description={product.description}
                    image={product.image}
                    price={product.price}
                  />
                ))}
              </div>
              <div className="seemore_bt">
                <a href="#">See More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
