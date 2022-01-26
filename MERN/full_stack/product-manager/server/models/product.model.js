const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, "Product must have a title"],
    minlength: [2, "Product title must be at least 2 characters"],
  },
  price: {
    type: Number,
    required: [true, "Product must have a price"],
    min: [0, "Product price must not be negative"],
  },
  description: {
    type: String,
    required: [true, "Product must have a description"],
    minlength: [3, "Product description must be at least 3 characters"],
  },
});

const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
