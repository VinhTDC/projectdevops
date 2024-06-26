import "./App.css";
import { useEffect, useState } from "react";
import MapEmbed from "./components/MapEmbed";
import Banner from "./components/Banner";
import About from "./components/About";
import Customer from "./components/Customer";
import Products from "./components/Products";
import Header from "./components/Header";

function App() {
  const [banners, setBanners] = useState([]);
  const [products, setProducts] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Thêm state loading
  const [error, setError] = useState(null);       // Thêm state error
  const apiUrl = process.env.REACT_APP_API_URL;
  useEffect(() => {
    const fetchBanners = fetch(`${apiUrl}/banners`).then(res => res.json());
    const fetchProducts = fetch(`${apiUrl}/products`).then(res => res.json());
    

    Promise.all([fetchBanners, fetchProducts])
      .then(([bannerData, productData]) => {
        setBanners(bannerData);
        setProducts(productData);
      })
      .catch(handleError)                        // Xử lý lỗi tập trung
      .finally(() => setIsLoading(false));      // Tắt loading khi hoàn thành
  }, []);

  const handleError = (error) => {
    console.error(error);
    setError("Đã có lỗi xảy ra. Vui lòng thử lại sau.");
  };

  if (isLoading) {                                
    return <div>Đang tải...</div>;
  }

  if (error) {                                   
    return <div>{error}</div>;
  }

  return (
    <div className="App">
      <Header />
      <Banner banners={banners} />
      <Products products={products} />
      <Customer />
      <About />
      <MapEmbed />
    </div>
  );
}

export default App;
