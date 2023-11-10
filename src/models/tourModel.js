import mongoose from "mongoose";
const mongoosePaginate = require('mongoose-paginate-v2');

 const tourSchema = mongoose.Schema({
    destination: String,
    backdropImage: String,
    title: String,
    description: String,
    duration: String,
    groupSize: String,
    price: String,
    discount: String, 
    tourType: String,
    departure: String, 
    seats: String,
    fromMonth: String, 
    toMonth: String, 
    departureTime: String, 
    returnTime: String, 
    gallery: {
      type:Array,
    }
  });

  tourSchema.plugin(mongoosePaginate);
  export const Tour= mongoose.model("Tour",tourSchema) 

  