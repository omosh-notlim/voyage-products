import express from "express";
import { 
    addProduct, 
    deleteProduct, 
    getProduct, 
    getProducts, 
    updateProduct
} from "../controllers/productController.js";

const productRouter = express.Router();

productRouter.post("/new", addProduct);

productRouter.get("", getProducts);
productRouter.get("/:product_id", getProduct);

productRouter.put("/:product_id", updateProduct);

productRouter.delete("/:product_id", deleteProduct);

export default productRouter;