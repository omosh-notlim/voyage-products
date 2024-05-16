import express from "express";
import dotenv from "dotenv";
import sequelize from "./dbConnection.js";
import cors from "cors";

import Product from "./models/Product.js";
import productRouter from "./routes/productRoute.js";

const app = express();
dotenv.config();

// middleware
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE']
}));
app.use(express.json());

app.use("/api/v1/products", productRouter);

//error handler
app.use((err, req, res, next) => {
    const status = err.status || 500;
    const message = err.message || "Something went wrong!";
    return res.status(status).json({
        success: false,
        status,
        message,
    });
});

(async () => {
    try {
        await sequelize.sync({ force:false });
        console.log("Connected to Green Voyage DB");
    } catch (error) {
        console.log("An error occurred while attempting to connect!", error.message);
    }
})();

// use a port number of your choice
app.listen(3004, () => {
    console.log("Server running on port 3004...");
});