import mongoose from "mongoose";

const contactModel = mongoose.Schema({
    email: { type: String, require: true },
    message: { type: String, require: true }
})

export const contact = mongoose.model('contact', contactModel);