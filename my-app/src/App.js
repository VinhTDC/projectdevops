import './App.css';

import Banner from './Banner/banner'
import { useEffect, useState } from "react";

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
    </div>
  );
}

export default App;
