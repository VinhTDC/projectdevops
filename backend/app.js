const express = require('express')
const app = express()
const port = process.env.PORT || 3000; // Sửa cổng lắng nghe thành 3030
const cors = require("cors");

const corsOptions = {
  origin: "http://localhost:3000",
  optionsSuccessStatus: 200,
};

app.use(cors(corsOptions));

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

app.get("/", (req, res) => {
    res.send({ status: "OK", message: "I'm OK , I'm fine, Kinchana" });
});
  
app.get("/banner", cors(corsOptions), (req, res) => {
    const banners = [
      {
        title: "Banner Kinchana 1",
        description: "I'm OK , I'm fine, Kinchana ... ",
        image: "/images/banner-img.png",
      },
      {
        title: "Banner Kinchana 2",
        description: "I'm OK , I'm fine, Kinchana ... ",
        image: "/images/banner-img.png",
      },
      {
        title: "Banner Kinchana 3",
        description: "I'm OK , I'm fine, Kinchana ... ",
        image: "/images/banner-img.png",
      },
    ];
  
    res.send(banners);
});


