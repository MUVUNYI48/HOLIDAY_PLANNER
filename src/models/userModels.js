import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: { type: String, required: true },
    fullNames: { type: String, required: true },
    password: { type: String,required: true },
    phoneNumbers: { type: String, required: false },
    location: { type: String, required: false },
    role: { type: String, default: "user" }
})

export const User= mongoose.model("User", userSchema);