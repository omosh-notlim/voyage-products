import express from "express";
import { 
    addProduct, 
    deleteProduct, 
    getProduct, 
    getProducts, 
    updateProduct
} from "../controllers/productController.js";

const productRouter = express.Router();

// POST a product route
productRouter.post("/new", addProduct);

// GET all products route
productRouter.get("", getProducts);

// GET product by product_id route
productRouter.get("/:product_id", getProduct);

// Update(PUT) product by product_id route
productRouter.put("/:product_id", updateProduct);

// DELETE product by product_id route
productRouter.delete("/:product_id", deleteProduct);

export default productRouter;