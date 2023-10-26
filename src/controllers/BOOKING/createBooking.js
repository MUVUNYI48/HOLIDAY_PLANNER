import { Booking } from "../../models/bookModel.js";
import { Tour } from "../../models/tourModel.js";
import { User } from "../../models/userModels.js";




export const createBooking = async (req, res) => {
    try {

        const tourId = req.body.tourID;
        const { userId } = req;
        const {email}=req



        let tourid = await Tour.findOne({ _id: tourId });
        console.log('TOUR ID:', tourId);
        let user = await User.findOne({_id:userId});

        console.log('user id:',user.email);

        if (!tourid) {
            res.json({
                message: "booking data not found "
            })
        }

        console.log('userId :', userId);

        await Booking.create({
            ...req.body, UserID: userId
        })



        return res.status(201).json({
            msg: "you have booked a tour",
        })

    } catch (error) {
        console.log('error:', error)
    }
}