const express = require("express");
const app = express();
const port = process.env.PORT || 3000; // Sửa cổng lắng nghe thành 3030
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

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
    {
      title: "Makeup <br />Kit 2",
      description:
        "Ncididunt 2 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      image: "/images/banner-img.png",
    },
    {
      title: "Makeup <br />Kit 3",
      description:
        "Ncididunt 3 ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo",
      image: "/images/banner-img.png",
    },
  ];
  res.send(banners);
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
