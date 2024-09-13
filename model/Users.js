import { connection as db } from "../config/index.js";

class Products {
  // Fetch all products
  fetchProducts(req, res) {
    try {
      const strQry = `SELECT prodID, prodName, price, prodBrand, imageURL FROM Products;`;
      db.query(strQry, (err, results) => {
        if (err) throw new Error("Unable to fetch all products.");
        res.json({
          status: res.statusCode,
          results,
        });
      });
    } catch (e) {
      res.status(404).json({
        status: 404,
        msg: e.message,
      });
    }
  }

  // Fetch recent products
  recentProducts(req, res) {
    try {
      const strQry = `
        SELECT prodID, prodName, price, prodBrand, imageURL
        FROM Products
        ORDER BY prodID DESC
        LIMIT 5;
      `;
      db.query(strQry, (err, results) => {
        if (err) throw new Error("Unable to retrieve recent products.");
        res.json({
          status: res.statusCode,
          results,
        });
      });
    } catch (e) {
      res.status(404).json({
        status: 404,
        msg: e.message,
      });
    }
  }

  // Fetch a single product by ID
  fetchProduct(req, res) {
    try {
      const strQry = `SELECT prodID, prodName, price, prodBrand, imageURL FROM Products WHERE prodID = ?;`;
      db.query(strQry, [req.params.id], (err, result) => {
        if (err) throw new Error(`Unable to fetch product with id ${req.params.id}`);
        res.json({
          status: res.statusCode,
          result: result[0],
        });
      });
    } catch (e) {
      res.status(404).json({
        status: 404,
        msg: e.message,
      });
    }
  }

  // Add a new product
  addProduct(req, res) {
    try {
      const strQry = `INSERT INTO Products SET ?;`;
      db.query(strQry, [req.body], (err) => {
        if (err) throw new Error("Unable to add a product.");
        res.json({
          status: res.statusCode,
          msg: "Product was added successfully.",
        });
      });
    } catch (e) {
      res.status(400).json({
        status: 400,
        msg: e.message,
      });
    }
  }

  // Update an existing product
  updateProduct(req, res) {
    try {
      const { prodName, price, prodBrand, imageURL } = req.body;
      // Validation: Ensure required fields are provided
      if (!prodName || !price || !prodBrand) {
        return res.status(400).json({ msg: "Missing required fields" });
      }
      
      const strQry = `UPDATE Products SET ? WHERE prodID = ?;`;
      db.query(strQry, [req.body, req.params.id], (err) => {
        if (err) throw new Error("Unable to update the product.");
        res.json({
          status: res.statusCode,
          msg: "The product was updated successfully.",
        });
      });
    } catch (e) {
      res.status(400).json({
        status: 400,
        msg: e.message,
      });
    }
  }

  // Delete a product by ID
  deleteProduct(req, res) {
    try {
      const strQry = `DELETE FROM Products WHERE prodID = ?;`;
      db.query(strQry, [req.params.id], (err) => {
        if (err) throw new Error("Unable to delete the product.");
        res.json({
          status: res.statusCode,
          msg: "Product deleted successfully.",
        });
      });
    } catch (e) {
      res.status(404).json({
        status: 404,
        msg: e.message,
      });
    }
  }
}

export { Products };
