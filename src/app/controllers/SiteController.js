import Course from "../../app/models/Course";

class SiteControllers {
  // [GET] /
  home(req, res) {
    Course.find({}, function (err, cources) {
      if (!err) {
        res.json(cources);
      } else {
        res.status(400).json({ error: "Loi ket noi" });
      }
    });

    // res.render("home");
  }

  // [GET] /search
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteControllers();
