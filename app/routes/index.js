module.exports = function (app) {

  app.get("/", function (req, res) {
    res.render("pages/homepage");
  });

  app.get("/login", function (req, res) {
    res.render("pages/login");
  });

  app.get("/registration", function (req, res) {
    res.render("pages/registration");
  });

  app.get("/error-404", function (req, res) {
    res.render("pages/error-404");
  });
  
};
