import express from "express";
import {
    getProduct,
    postProduct,
    putProduct,
    removeProduct,
} from "../controllers/product.controller.js";

const productRouter = express.Router();

productRouter.route("/").get(getProduct).post(postProduct);

productRouter.route("/:id").put(putProduct).delete(removeProduct);

export default productRouter;