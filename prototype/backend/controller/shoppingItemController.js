import express from "express";
import {ShoppingItem} from "../models/shoppingItemModel.js";

const router = express.Router();

router.get("/getAll", async (req, res)=>{
    let items = await ShoppingItem.find()
    return res.status(200).send(items);
})

router.get("/byId/:id", async (req, res)=>{
    const {id} = req.params;
    let item = await ShoppingItem.findById(id);
    return res.status(200).send(item);
})

router.get("/byName/:name", async (req, res)=>{
    const {name} = req.params;
    let item = await ShoppingItem.where({name: name});
    return res.status(200).send(item);
})

router.post("/create", async (req, res)=>{
    const newItem = await ShoppingItem.create(req.body)
    return res.status(200).send(newItem);
})

router.delete("/delete/:id", async (req, res)=>{
    const {id} = req.params;
    await ShoppingItem.findByIdAndDelete(id)
    return res.status(200).send("ok");
})

router.put("/update", async (req, res)=>{
    let item = await ShoppingItem.findById(req.body._id)
    if (!item) return res.status(404).send("Item not found");

    if (req.body.name) item.name = req.body.name;
    //save the item
    await item.save();
    return res.status(200).send("ok");
})

export default router;