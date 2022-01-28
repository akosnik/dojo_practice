const Author = require("../models/author.model");

module.exports.test = (req, res) => {
  res.json({
    message: "Successful connection!",
  });
};

module.exports.getAllAuthors = (req, res) => {
  Author.find()
    .then((allAuthors) => {
      res.json({ results: allAuthors });
    })
    .catch((err) => {
      res.json({ message: "There was an error while getting all authors", error: err });
    });
};

module.exports.getOneAuthor = (req, res) => {
  Author.findOne({ _id: req.params.id })
    .then((oneAuthor) => {
      res.json({ results: oneAuthor });
    })
    .catch((err) => {
      res.json({ message: 'There was an error while getting one author', error: err})
    });
};

module.exports.editOneAuthor = (req, res) => {
  Author.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
    .then((updatedAuthor) => {
      res.json({ results: updatedAuthor })
    })
    .catch((err) => {
      res.json({ message: 'There was an error while editing one author', error: err})
    })
}

module.exports.deleteOneAuthor = (req, res) => {
  Author.deleteOne({ _id: req.params.id })
    .then((deletedAuthor) => {
      res.json({ results: deletedAuthor });
    })
    .catch((err) => {
      res.json({ message: 'There was an error while deleting the author', error: err})
    });
};

module.exports.createAuthor = (req, res) => {
  Author.create(req.body)
    .then((newAuthor) => {
      res.json({ results: newAuthor });
    })
    .catch((err) => {
      res.json({ message: 'There was an error while creating the author', error: err})
    });
};
