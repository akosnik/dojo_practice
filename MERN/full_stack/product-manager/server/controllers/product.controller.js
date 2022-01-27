const Product = require("../models/product.model");

module.exports.index = (req, res) => {
  res.json({
    message: "Hello World",
  });
};

module.exports.getAllProducts = (req, res) => {
  Product.find()
    .then((allProducts) => {
      res.json({ results: allProducts });
    })
    .catch((err) => {
      res.json({ message: "There was an error while getting all products", error: err });
    });
};

module.exports.getSingleProduct = (req, res) => {
  Product.findOne({ _id: req.params.id })
    .then((singleProduct) => {
      res.json({ results: singleProduct });
    })
    .catch((err) => {
      res.json({ message: 'There was an error while getting a single product', error: err})
    });
};

module.exports.editSingleProduct = (req, res) => {
  Product.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true, runValidators: true })
    .then((updatedProduct) => {
      res.json({ results: updatedProduct })
    })
    .catch((err) => {
      res.json({ message: 'There was an error while editing a single product', error: err})
    })
}

module.exports.deleteSingleProduct = (req, res) => {
  Product.deleteOne({ _id: req.params.id })
    .then((deletedProduct) => {
      res.json({ results: deletedProduct });
    })
    .catch((err) => {
      res.json({ message: 'There was an error while deleting a product', error: err})
    });
};

module.exports.createProduct = (req, res) => {
  Product.create(req.body)
    .then((newProduct) => {
      res.json({ results: newProduct });
    })
    .catch((err) => {
      res.json({ message: 'There was an error while creating a product', error: err})
    });
};
