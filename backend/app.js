const express = require("express"); // npm install express
const cors = require("cors"); // npm install cors
const app = express();


// app.use(cors({
//   origin: 'http://54.252.237.102' // Cho phép truy cập từ origin cụ thể
// }));
const db = require("mysql2");
const port = process.env.PORT || 3030; // Sửa cổng lắng nghe thành 3030
const dbHost = process.env.DB_HOST || "localhost";
const dbPort = process.env.DB_PORT || "3306";
const dbUser = process.env.DB_USER || "admin";
const dbPass = process.env.DB_PASS || "admin";
const dbName = process.env.DB_NAME || "tdc-devops";

const CORS_WHITELIST = [
  "http://localhost:3000",
  "http://localhost:3003",
  "http://localhost:3002",
  "http://localhost:3006",
  "http://localhost:8080",
  "http://localhost",
  
];
const corsOptions = {
  origin: "*", // Accept all origins => Development
  origin: CORS_WHITELIST, // Accept origins in whitelist => Production
  optionsSuccessStatus: 200,
};
app.use(cors(corsOptions));

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

const connection = db.createConnection({
  host: dbHost,
  port: dbPort,
  user: dbUser,
  password: dbPass,
  database: dbName,
});



connection.connect(function (err) {
  if (err) throw err;
  console.log(
    `DB Connected! ${dbHost}:${dbPort}/${dbName} with User: ${dbUser}`
  );
});



app.get("/", (req, res) => {
  res.send({
    message: "Welcome to my API",
  });
});

app.get("/banners", (req, res) => {
  connection.query("SELECT * FROM banner", (err, rows) => {
    if (err) throw err;
    // Mapping dữ liệu trả về từ DB table => Response model
    const banners = rows.map((row) => {
      return {
        title: row.title,
        description: row.description,
        image: row.image,
      };
    });
    res.send(banners);
  });
});
app.get("/products", (req, res) => {
  connection.query("SELECT * FROM product", (err, rows) => {
    if (err) throw err;
    // Mapping dữ liệu trả về từ DB table => Response model
    const products = rows.map((row) => {
      return {
        id: row.id,
        name: row.name,
        price: row.price,
        description: row.description,
        image: row.image,
      };
    });
    res.send(products);
  });
});

app.get("/customers", (req, res) => {
  connection.query("SELECT * FROM customer", (err, rows) => {
    if (err) throw err;
    // Mapping dữ liệu trả về từ DB table => Response model
    const customers = rows.map((row) => {
      return {
        id: row.id,
        name: row.name,
        description: row.description,
        image: row.image,
      };
    });
    res.send(customers);
  });
});
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
