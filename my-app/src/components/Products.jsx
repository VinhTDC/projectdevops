export default function Products() {
    const products = [
        { id: 1, name: "Beauty Brush", description: "incididunt ut labore et dolore magna aliqua. Ut enim", image: "images/img-1.png", price: 30 },
    ];

    return (
        <div className="product_section layout_padding">
            <div className="container">
                <div className="row">
                    <div className="col-sm-12">
                        <h1 className="product_taital">Our Products</h1>
                        <p className="product_text">incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation</p>
                    </div>
                </div>
                <div className="product_section_2 layout_padding">
                    <div className="row">
                        {products.map(product => (
                            <div key={product.id} className="col-lg-3 col-sm-6">
                                <div className="product_box">
                                    <h4 className="bursh_text">{product.name}</h4>
                                    <p className="lorem_text">{product.description}</p>
                                    <img src={product.image} className="image_1" alt={product.name} />
                                    <div className="btn_main">
                                        <div className="buy_bt">
                                            <ul>
                                                <li className="active"><a href="#">Buy Now</a></li>
                                                {/* Duplicate Buy Now removed for simplicity */}
                                            </ul>
                                        </div>
                                        <h3 className="price_text">Price ${product.price}</h3>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="seemore_bt"><a href="#">See More</a></div>
                </div>
            </div>
        </div>
    );
}
