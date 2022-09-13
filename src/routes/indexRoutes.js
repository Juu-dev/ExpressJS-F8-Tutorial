const newsRouter = require("./new_routes");
const siteRouter = require("./site_routes");

function Route(app) {
  app.use("/news", newsRouter);

  app.use("/search", siteRouter);
  app.use("/", siteRouter);
}

module.exports = { Route };
