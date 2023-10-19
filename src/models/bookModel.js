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
        type: String,
        required: true
    },
    paymentMethod: {
        type: String,
        required: true
    }
})

export const Booking = mongoose.model('Booking', bookingSchema);

