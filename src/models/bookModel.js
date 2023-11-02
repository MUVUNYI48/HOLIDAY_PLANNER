import mongoose from "mongoose";

const bookingSchema = mongoose.Schema({

    tourID: {
        type: String,
        required: true

    },
    UserID: {
        type: String,
        required: true
    },
    isPayed: {
        type: Boolean,
        default: false
    },
    paymentMethod: {
        type: String,
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    whoBooked: {
        type: Object,
        required: true
    },
    tourBooked: {
        type: Object,
        required: true
    },
    Status: {
        type: String, default: "pending"
    },
    NumberOfTicket: {
        type: Number
    }




})

export const Booking = mongoose.model('Booking', bookingSchema);

