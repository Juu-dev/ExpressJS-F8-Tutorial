// import express (framwork base on Node.js)
import express from "express";
// import morgan (HTTP request logger middleware for Node.js )
const morgan = require("morgan");
// import express-handlebars (template layout)
const handlebars = require("express-handlebars");
// import path
const path = require("path");

// import routes
const route = require("./routes/indexRoutes");

// import database
import db from "./config/db";
// connect to db
db.connect();

const app = express();
const port = 3000;

// console.log(__dirname);

// static file => access path: "__dirname/public"
app.use(express.static(path.join(__dirname, "public")));

// middleware handle data that were submitted from form by post method
app.use(
  express.urlencoded({
    extended: true,
  })
);
app.use(express.json());

//HTTP logger
app.use(morgan("combined"));

// Template Engine (express-handlebars)
app.engine("hbs", handlebars.engine({ extname: "hbs" }));
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Route init
route.Route(app);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
