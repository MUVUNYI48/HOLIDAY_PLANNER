import { Booking } from "../../models/bookModel.js";
import { Tour } from "../../models/tourModel.js";
import { User } from "../../models/userModels.js";




export const createBooking = async (req, res) => {
    try {
        
        const id=req.userId;
        console.log('user id:',id);

        let tour=await Tour.find();

        console.log('tour data',tour[0]._id);


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