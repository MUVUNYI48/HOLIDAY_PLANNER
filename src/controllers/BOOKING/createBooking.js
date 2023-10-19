import { Booking } from "../../models/bookModel";

export const createBooking=async(req,res)=>{
    try {
        let bookingData=req.body;

        if(bookingData){
            console.log('data:',bookingData)
            return res.status(201).json({
                message:bookingData
            })
        }

        res.json({
            message:"booking data not found "
        })


    } catch (error) {
        console.log('error:',error)
    }
}