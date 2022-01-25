const Joke = require("../models/jokes.model");

module.exports.findAllJokes = (req, res) => {
  Joke.find()
    .then((allJokes) => res.json({ results: allJokes }))
    .catch((err) => res.json({ message: "Something went wrong", err }));
};

module.exports.findSingleJoke = (req, res) => {
  Joke.findOne({ _id: req.params.id })
    .then((oneSingleJoke) => res.json({ joke: oneSingleJoke }))
    .catch((err) => res.json({ message: "Something went wrong", error: err }));
};

module.exports.createNewJoke = (req, res) => {
  Joke.create(req.body)
    .then((newlyCreatedJoke) => res.json({ user: newlyCreatedJoke }))
    .catch((err) => res.json({ msg: "Something went wrong", err }));
};

module.exports.updateExistingJoke = (req, res) => {
  Joke.findOneAndUpdate({ _id: req.params.id }, req.body, {
    new: true,
    runValidators: true,
  })
    .then((updateJoke) => res.json({ joke: updateJoke }))
    .catch((err) => res.json({ msg: "Something went wrong", err }));
};

module.exports.deleteExistingJoke = (req, res) => {
  Joke.deleteOne({ _id: req.params.id })
    .then((result) => res.json({ result: result }))
    .catch((err) => res.json({ msg: "Something went wrong", err }));
};

module.exports.getRandomJoke = (req, res) => {
  Joke.find()
    .then((allJokes) => {
      let randomIndex = Math.floor(Math.random() * allJokes.length);
      res.json({ joke: allJokes[randomIndex] });
    })
    .catch((err) => res.json({ msg: "Something went wrong", err }));
};
