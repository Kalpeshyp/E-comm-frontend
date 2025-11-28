import express from "express";
import cors from "cors";
import connectDB from "./config/mongoDB.js";
import productRouter from "./routers/product.router.js";

const app = express();

app.use(express.json());
app.use(cors());

connectDB();

app.use("/product", productRouter);

app.listen(5000, () => {
    console.log("Server listening to port 5000");
});