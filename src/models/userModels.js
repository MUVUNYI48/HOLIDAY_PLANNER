import mongoose from "mongoose";

const userSchema = mongoose.Schema({
    email: { type: String, required: true },
    fullNames: { type: String, required: true },
    password: { type: String, required: true },
    phoneNumbers: { type: String, required: true },
    location: { type: String, required: true },
    role: { type: String, default: "user" }
})

export const User= mongoose.model("User", userSchema);