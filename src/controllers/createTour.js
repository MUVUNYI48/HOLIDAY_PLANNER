import mongoose from "mongoose";
import { Tour } from "../models/tourModel";

export const createTour = async (req, res) => {
    try {

        let newTour = Tour.create(req.body);

        let checknewTour = await Tour.findOne({ email: req.body.email })

        if (checknewTour) {
            res.json({
                message: "data already exist"
            })
        }

        res.json({
            message:"data inserted",
            destination: newTour.body.destination,
            backdropImage: newTour.body.backdropImage,
            title: newTour.body.title,
            description: newTour.body.description,
            duration: newTour.body.duration, // Assuming it represents the number of days or hours
            groupSize: newTour.body.groupSize,
            price: newTour.body.price,
            discount: newTour.body.discount, // Percentage discount
            tourType: newTour.body.tourType,
            departure: newTour.body.departure, // Location or city of departure
            seats: newTour.body.seats,
            fromMonth: newTour.body.fromMonth, // Month of departure
            toMonth: newTour.body.toMonth, // Month of return
            departureTime: newTour.body.departureTime, // Time of departure
            returnTime: newTour.body.returnTime, // Time of return
            // gallery: [String], 
        })
    } catch (err) {
        console.log('error ', err.message);
    }


}