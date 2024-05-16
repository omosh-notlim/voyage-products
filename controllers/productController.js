import { createError } from "../error.js";
import Product from "../models/Product.js";

// Add product
export const addProduct = async (req, res, next) => {
    try {
        const product = await Product.create(req.body);
        res.status(201).json(product);
    } catch (error) {
        next(error);
    }
};

// Get products with dynamic pagination
export const getProducts = async (req, res, next) => {
    try {
        // Get page and size from query parameters with default values
        const page = parseInt(req.query.page) || 1;
        const size = parseInt(req.query.size) || 10;
        
        // Calculate the offset and limit
        const offset = (page - 1) * size;
        const limit = size;

        // Fetch users with offset and limit
        const { count, rows } = await Product.findAndCountAll({
            offset: offset,
            limit: limit
        });

        // Calculate total pages
        const totalPages = Math.ceil(count / size);

        // Prepare the response object
        const response = {
            totalItems: count,
            totalPages: totalPages,
            currentPage: page,
            users: rows
        };

        res.json(response);
    } catch (error) {
        next(error);
    }
};

// Fetch a specific product by product_id
export const getProduct = async (req, res, next) => {
    try {
        const product = await Product.findByPk(req.params.product_id);
        if (!product) return next(createError(404, "Product not found!"));
        // if (!product) {
        //     res.status(404).json({ error: 'Product not found!' });
        // } else {
            res.json(product);
        // }
    } catch (error) {
        next(error);
    }
};

// Update a specific product (by product_id)
export const updateProduct = async (req, res, next) => {
    try {
        const product = await Product.findByPk(req.params.product_id);
        if (!product) return next(createError(404, "Product not found!"));
        
        const updatedProduct = await Product.update(
            req.body, {
                returning: true,
                where: {product_id: req.params.product_id},
            }
        );
        res.status(200).json(updatedProduct[1]); 
    } catch (error) {
        next(error);
    }
};

// Delete a specific product (by product_id)
export const deleteProduct = async (req, res, next) => {
    try {
        const product = await Product.findByPk(req.params.product_id);
        if (!product) return next(createError(404, "Product not found!"));
        
        await Product.destroy({
            where: { product_id: req.params.product_id },
        });
        res.status(202).json({ message: 'Product deleted.' });
    } catch (error) {
        next(error);
    }
};