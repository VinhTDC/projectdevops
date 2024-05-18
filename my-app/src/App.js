import './App.css';


import { useEffect, useState } from "react";
import MapEmbed from './components/MapEmbed';
import Banner from './components/Banner';
import About from './components/About';
import Customer from './components/Customer';

function App() {
  const [banner, setBanner] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3003/banner").then((res) => {
      return res.json();
    }).then((data) => {
      console.log(data);
    }).catch((err) => {
      console.log(err);
    })
  }, []);
  return (
    <div className="App">
      <Banner />
      <Customer />
      <About />
      <MapEmbed />
    </div>
  );
}

export default App;
