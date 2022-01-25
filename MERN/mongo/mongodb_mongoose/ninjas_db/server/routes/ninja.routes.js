const NinjaController = require("../controllers/ninja.controller");

module.exports = (app) => {
  app.get("/api/hello", NinjaController.sayHello);
};
