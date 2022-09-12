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

const app = express();
const port = 3000;

console.log(__dirname);

// static file => access path: "__dirname/public"
app.use(express.static(path.join(__dirname, "public")));

//HTTP logger
app.use(morgan("combined"));

// Template Engine
app.engine(".hbs", engine({ extname: ".hbs" }));
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources/views"));

app.get("/", (req, res) => {
  res.render("home");
});

app.get("/news", (req, res) => {
  console.log(req.query.q);
  res.render("news");
});

app.get("/search", (req, res) => {
  console.log(req.query.q);
  res.render("search");
});

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
