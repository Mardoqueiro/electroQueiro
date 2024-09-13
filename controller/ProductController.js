import express from "express";
import bodyParser from "body-parser";
import { products } from "../model/index.js"; // Assuming `Products` is exported here

const productRouter = express.Router();
productRouter.use(bodyParser.json());

// Route for fetching all products
productRouter.get("/", (req, res) => {
  products.fetchProducts(req, res);
});

// Route for fetching recent products
productRouter.get("/recent", (req, res) => {
  products.recentProducts(req, res);
});

// Route for fetching a single product by ID
productRouter.get("/:id", (req, res) => {
  products.fetchProduct(req, res);
});

// Route for adding a new product
productRouter.post("/add", (req, res) => {
  products.addProduct(req, res);
});

// Route for updating a product by ID
productRouter.patch("/:id", (req, res) => {
  products.updateProduct(req, res);
});

// Route for deleting a product by ID
productRouter.delete("/:id", (req, res) => {
  products.deleteProduct(req, res);
});

export { productRouter };
