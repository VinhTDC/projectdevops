const express = require('express'); // npm install express
const cors = require('cors'); // npm install cors
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
      title: "Makeup <br />Kit 1",
      description:
        "Ncididunt 1 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      image: "/images/banner-img.png",
    },
  ];
  res.send(banners);
});
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
