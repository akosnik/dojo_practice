
const AuthorController = require("../controllers/author.controller");

module.exports = function (app) {
  app.get("/api", AuthorController.test);

  app.get("/api/authors", AuthorController.getAllAuthors);

  app.post("/api/authors", AuthorController.createAuthor);

  app.get("/api/authors/:id", AuthorController.getOneAuthor);

  app.put("/api/authors/:id", AuthorController.editOneAuthor);

  app.delete("/api/authors/:id", AuthorController.deleteOneAuthor);
};
