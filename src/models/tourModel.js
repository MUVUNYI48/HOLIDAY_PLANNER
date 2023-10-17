import mongoose from "mongoose";

 const tourSchema = mongoose.Schema({
    destination: String,
    backdropImage: String,
    title: String,
    description: String,
    duration: Number, // Assuming it represents the number of days or hours
    groupSize: Number,
    price: Number,
    discount: Number, // Percentage discount
    tourType: String,
    departure: String, // Location or city of departure
    seats: Number,
    fromMonth: String, // Month of departure
    toMonth: String, // Month of return
    departureTime: String, // Time of departure
    returnTime: String, // Time of return
    gallery: [String], // An array of image URLs for the gallery
  });

  export const Tour= mongoose("Tour",tourSchema) 

  