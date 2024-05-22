import './App.css';


import { useEffect, useState } from "react";
import MapEmbed from './components/MapEmbed';
import Banner from './components/Banner';
import About from './components/About';
import Customer from './components/Customer';
import Products from './components/Products';

function App() {
  const [banners, setBanners] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003/banners").then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data);
      setBanners(data);
    }).catch((err) => {
      console.log(err);
    });
  }, []);
  return (
    <div className="App">
      {banners.map((banner) => {
        return <Banner title={banner.title} description={banner.description} image={banner.image} />
      })}
      <Products/>
      <Customer />
      <About />
      <MapEmbed />
    </div>
  );
}

export default App;
