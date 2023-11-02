import { Tour } from "../../models/tourModel.js";
import { catchAsync } from "../../utils/catchAsync.js";

export const getOneTour = catchAsync(async (req, res) => {
    let Id = req.params.id;

    let onetour = await Tour.findOne({ _id: Id })

    if (onetour) {
        return res.status(302).json({
            message: 'one tour found successfully',
            onetour
        })
    }
    res.status(412).json({
        message: 'data not found'
    })


})