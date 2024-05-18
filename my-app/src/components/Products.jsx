export default function Products() {
    const products = [
        { id: 1, name: "Cọ Trang Điểm", description: "Dùng để trang điểm mặt, dễ sử dụng.", image: "images/img-1.png", price: 30 },
        { id: 2, name: "Son Môi", description: "Màu đỏ rực rỡ, không gây khô môi.", image: "images/img-2.png", price: 20 },
        { id: 3, name: "Phấn Má", description: "Tạo vẻ hồng hào tự nhiên cho gương mặt.", image: "images/img-3.png", price: 25 },
        { id: 4, name: "Mascara", description: "Làm dài và dày mi một cách tự nhiên.", image: "images/img-4.png", price: 15 },
        { id: 5, name: "Mascara", description: "Làm dài và dày mi một cách tự nhiên.", image: "images/img-5.png", price: 15 },
        { id: 6, name: "Mascara", description: "Làm dài và dày mi một cách tự nhiên.", image: "images/img-6.png", price: 15 },
        { id: 7, name: "Mascara", description: "Làm dài và dày mi một cách tự nhiên.", image: "images/img-7.png", price: 15 },
        { id: 8, name: "Mascara", description: "Làm dài và dày mi một cách tự nhiên.", image: "images/img-8.png", price: 15 },
        { id: 9, name: "Mascara", description: "Làm dài và dày mi một cách tự nhiên.", image: "images/img-9.png", price: 15 },
        { id: 10, name: "Mascara", description: "Làm dài và dày mi một cách tự nhiên.", image: "images/img-10.png", price: 15 },
        { id: 11, name: "Mascara", description: "Làm dài và dày mi một cách tự nhiên.", image: "images/img-11.png", price: 15 },
        { id: 12, name: "Mascara", description: "Làm dài và dày mi một cách tự nhiên.", image: "images/img-12.png", price: 15 },
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