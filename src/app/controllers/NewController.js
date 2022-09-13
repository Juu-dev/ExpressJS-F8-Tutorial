class NewControllers {
  // [GET] /news
  index(req, res) {
    res.render("news");
  }

  // [GET] /news/:flug
  show(req, res) {
    res.send("NEWS DETAIL");
  }
}

module.exports = new NewControllers();
