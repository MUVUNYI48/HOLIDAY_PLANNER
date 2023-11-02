import { Tour } from "../../models/tourModel.js";
import { catchAsync } from "../../utils/catchAsync.js";

export const getAllTour = catchAsync(async (req, res) => {
    let tour = await Tour.find();

    if (tour) {
        console.log(tour, 'tour')
        res.status(302).json({
            list_of_tour: tour
        })
    }
})