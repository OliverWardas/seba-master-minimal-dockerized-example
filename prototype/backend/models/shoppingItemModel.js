import mongoose from "mongoose";

const shoppingItemSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true
        }
    }
)

export const ShoppingItem = mongoose.model("ShoppingItem", shoppingItemSchema)