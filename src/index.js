// I'm loading the file by ECMAScript module which does'n have __dirname or __filename
import { fileURLToPath } from "url";
import path, { dirname } from "path";
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// import express (framwork base on Node.js)
import express from "express";
// import morgan (HTTP request logger middleware for Node.js )
import morgan from "morgan";
// import express-handlebars (template code)
import { engine } from "express-handlebars";

// import routes
import route from "./routes/index_routes";

// import database
import db from "./config/db";
// connect to db
db.connect();

const app = express();
const port = 3000;

console.log(__dirname);

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

// Template Engine
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources/views"));

// Route init
route(app);

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
