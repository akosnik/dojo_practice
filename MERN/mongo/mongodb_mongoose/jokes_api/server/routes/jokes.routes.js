const JokesController = require("../controllers/jokes.controller");

module.exports = (app) => {
  app.get("/api/jokes", JokesController.findAllJokes);

  app.get("/api/jokes/random", JokesController.getRandomJoke);

  app.post("/api/jokes", JokesController.createNewJoke);

  app.get("/app/jokes/:id", JokesController.findSingleJoke);

  app.put("/api/jokes/:id", JokesController.updateExistingJoke);

  app.delete("/api/jokes/:id", JokesController.deleteExistingJoke);
};
