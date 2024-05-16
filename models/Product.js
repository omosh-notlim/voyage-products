import { DataTypes } from "sequelize";
import sequelize from "../dbConnection.js";

const Product = sequelize.define('Product', {
    product_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    product_name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    unit_of_measurement: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    unit_price_in_KES: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    available_quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    tableName: 'products',
    timestamps: true,
});

export default Product;