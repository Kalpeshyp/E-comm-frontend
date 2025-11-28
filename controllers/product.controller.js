import {
    createProduct,
    deleteProduct,
    readProducts,
    updateProduct,
} from "../models/product.model.js";

const getProduct = async(req, res) => {
    try {
        const products = await readProducts();
        res.send(products);
    } catch (error) {
        console.error(error);
    }
};

const postProduct = async(req, res) => {
    try {
        await createProduct(req.body);
        res.send("Product added successfully");
    } catch (error) {
        console.error(error);
    }
};

const putProduct = async(req, res) => {
    try {
        await updateProduct(req.params.id, req.body);
        res.send("Product Updated Successfully");
    } catch (error) {
        console.error(error);
    }
};

const removeProduct = async(req, res) => {
    try {
        await deleteProduct(req.params.id);
        res.send("Product Removed Successfully");
    } catch (error) {
        console.error(error);
    }
};

export { getProduct, postProduct, putProduct, removeProduct };