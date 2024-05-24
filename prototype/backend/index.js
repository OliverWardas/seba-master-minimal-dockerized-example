import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import shoppingItemController from "./controller/shoppingItemController.js";
import config from "./config.js";

const PORT = 8080;

const app = express();

//middleware
app.use(cors());
app.use(express.json());

//mount controllers
app.use("/shoppingItems", shoppingItemController);

mongoose.connect(config.mongoDbUrl).then(()=>{
    app.listen(PORT, "0.0.0.0", () => {
        console.log(`Server listening on ${PORT}`)
    })
}).catch((error) => {
    console.log(error)
})