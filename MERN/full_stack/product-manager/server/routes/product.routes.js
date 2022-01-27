const ProductController = require("../controllers/product.controller");

module.exports = function (app) {
  app.get("/api", ProductController.index);

  app.get("/api/products", ProductController.getAllProducts);

  app.post("/api/products", ProductController.createProduct);

  app.get("/api/products/:id", ProductController.getSingleProduct);

  app.put("/api/products/:id", ProductController.editSingleProduct);

  app.delete("/api/products/:id", ProductController.deleteSingleProduct);
};
