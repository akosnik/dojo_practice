const JokesController = require("../controllers/jokes.controller");

module.exports = (app) => {
  app.get("/api/jokes", JokesController.findAllJokes);
  app.get("/app/jokes/:id", JokesController.findSingleJoke);
  app.get("/api/jokes/random", JokesController.getRandomJoke);
  app.put("/api/jokes/:id", JokesController.updateExistingJoke);
  app.post("/api/jokes", JokesController.createNewJoke);
  app.delete("/api/jokes/:id", JokesController.deleteExistingJoke);
};
