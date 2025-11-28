import Product from "./product.mongo.js";

const readProducts = async() => {
    try {
        return await Product.find();
    } catch (error) {
        console.error(error);
    }
};

const createProduct = async(newProduct) => {
    try {
        return await Product.create(newProduct);
    } catch (error) {
        console.error(error);
    }
};

const updateProduct = async(id, product) => {
    try {
        return await Product.findOneAndUpdate({ _id: id }, product);
    } catch (error) {
        console.error(error);
    }
};

const deleteProduct = async(id) => {
    try {
        return await Product.findOneAndDelete({ _id: id });
    } catch (error) {
        console.error(error);
    }
};

export { readProducts, createProduct, updateProduct, deleteProduct };