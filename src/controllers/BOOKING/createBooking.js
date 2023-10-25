import { Booking } from "../../models/bookModel.js";
import { Tour } from "../../models/tourModel.js";
import { User } from "../../models/userModels.js";




export const createBooking = async (req, res) => {
    try {

        const tourId = req.body.tourID;
        const body = req.body;
        // const paymentMethod = req.body.paymentMethod;
        const { userId } = req;



        let tourid = await Tour.findOne({ _id: tourId });
        console.log('TOUR ID:', tourId);

        if (tourid) {

            console.log('userId :', userId);

          await Booking.create({
                ...req.body, UserID: userId
            })

            res.status(201).json({
                msg: "you have booked a tour",
            })
        }


        res.json({
            message: "booking data not found "
        })


    } catch (error) {
        console.log('error:', error)
    }
}