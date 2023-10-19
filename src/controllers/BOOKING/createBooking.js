import { Booking } from "../../models/bookModel.js";
import { Tour } from "../../models/tourModel.js";
import { User } from "../../models/userModels.js";




export const createBooking = async (req, res) => {
    try {
        let {tourId} = Tour._id;

        console.log('tourId:',tourId);


        // if (bookingData) {
        //     console.log('data:', bookingData)
        //     const data = await Booking.create(bookingData);

        //     return res.status(201).json({
        //         message: data
        //     })
        // }

        res.json({
            message: "booking data not found "
        })


    } catch (error) {
        console.log('error:', error)
    }
}