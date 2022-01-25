const mongoose = require("mongoose");

const JokesSchema = new mongoose.Schema({
  setup: {
    type: String,
    required: [true, "Joke setup is required"],
    minlength: 10,
  },
  punchline: {
    type: String,
    required: [true, "Punchline is required"],
    minlength: 3,
  },
});

const Joke = mongoose.model("Joke", JokesSchema);

module.exports = Joke;
