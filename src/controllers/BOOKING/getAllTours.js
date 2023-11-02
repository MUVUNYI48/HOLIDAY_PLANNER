import { Booking } from "../../models/bookModel.js";
import { catchAsync } from "../../utils/catchAsync.js";

export const getAllBookedTours = catchAsync(async (req, res, next) => {
    let bookedTour = await Booking.find();
    res.status(200).json(bookedTour);
})