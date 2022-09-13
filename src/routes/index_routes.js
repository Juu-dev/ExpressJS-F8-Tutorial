import newsRouter from "./new_routes";
import siteRouter from "./site_routes";

function route(app) {
  app.use("/news", newsRouter);

  app.use("/search", siteRouter);
  app.use("/", siteRouter);
}

module.exports = route;
