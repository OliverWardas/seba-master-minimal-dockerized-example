import mongoose from "mongoose";

const userSchema = mongoose.Schema(
    {
        lastname: {
            type: String,
            required: true
        },
        firstname: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true,
            lowercase: true,
            validate:{
                validator: (value)=>{
                    return /^[\w-]+(?:\.[\w-]+)*@(?:[\w-]+\.)+[a-zA-Z]{2,7}$/.test(value);
                }
            }
        },
        birthday: {
            type: Date,
            required: false
        },
        bmi: {
            type: Number,
            required: true,
            min: 10,
            max: 60
        },
    }
)