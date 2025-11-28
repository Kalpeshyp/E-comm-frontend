import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    title: String,
    price: Number,
    category: String,
    image: String,
});

const product = mongoose.model('product', productSchema);
export default product;