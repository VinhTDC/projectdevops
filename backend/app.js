const express = require("express"); // npm install express
const cors = require("cors"); // npm install cors
const app = express();
const port = process.env.PORT || 3000; // Sửa cổng lắng nghe thành 3030

const CORS_WHITELIST = [
  "http://localhost:3000",
  "http://localhost:3002",
  "http://localhost:3006",
];

const corsOptions = {
  origin: "http://localhost:3000",
  // origin: "*", // Accept all origins => Development
  origin: CORS_WHITELIST, // Accept origins in whitelist => Production
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.get("/", (req, res) => {
  res.send({
    message: "Welcome to my API",
  });
});

app.get("/banners", (req, res) => {
  const banners = [
    {
      title: "Makeup <br /> Kit",
      description:
        "Ncididunt 1232131 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      image: "/images/banner-img.png",
    },
    {
      title: "Makeup1 <br /> Kit",
      description:
        "Ncididunt 1232131 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      image: "/images/banner-img.png",
    },
    {
      title: "Makeup2 <br /> Kit",
      description:
        "Ncididunt 1232131 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      image: "/images/banner-img.png",
    },
    {
      title: "Makeup3 <br /> Kit",
      description:
        "Ncididunt 1232131 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      image: "/images/banner-img.png",
    },
    {
      title: "Makeup 4<br /> Kit",
      description:
        "Ncididunt 1232131 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      image: "/images/banner-img.png",
    },
  ];
  res.send(banners);
});
app.get("/products", (req, res) => {
  const products = [
    {
      id: 1,
      name: "Beauty Brush",
      description: "incididunt ut labore et dolore magna aliqua. Ut enim",
      image: "images/img-1.png",
      price: 30,
    },
    {
      id: 2,
      name: "Beauty Brush",
      description: "incididunt ut labore et dolore magna aliqua. Ut enim",
      image: "images/img-1.png",
      price: 30,
    },
    {
      id: 3,
      name: "Beauty Brush",
      description: "incididunt ut labore et dolore magna aliqua. Ut enim",
      image: "images/img-1.png",
      price: 30,
    },
    {
      id: 4,
      name: "Beauty Brush",
      description: "incididunt ut labore et dolore magna aliqua. Ut enim",
      image: "images/img-1.png",
      price: 30,
    },
  ];
  res.send(products);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
