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
      console.log("There was an error while fetching all products", err);
    });
};

module.exports.createProduct = (req, res) => {
  Product.create(req.body)
    .then((newProduct) => {
      res.json({ results: newProduct });
    })
    .catch((err) => {
      console.log("There was an error while creating a new product", err);
    });
};
