const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "author must have a name"],
    minlength: [3, "author name must be at least 3 characters"],
  },
});


const Author = mongoose.model("Author", AuthorSchema);

module.exports = Author;
