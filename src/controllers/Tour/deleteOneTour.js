import { Tour } from "../../models/tourModel.js"
import { catchAsync } from "../../utils/catchAsync.js"

export const deleteOneTour = catchAsync(async (req, res) => {


    let Id = req.params.id;
    let tour = await Tour.findByIdAndDelete(Id);
    console.log(tour, 'user');

    if (!tour) {
        return res.json({ message: "failed to delete user" })
    }
    console.log("data", tour);
    res.status(200).json({
        messaage: 'tour  deleted',
        data: tour
    });
    // above there is a good way of handling exceptions
    // try {

    //     let Id = req.params.id

    //     let tour = await Tour.findByIdAndDelete(Id)
    //     console.log(tour,'user');
    //     if (!tour) {
    //         return res.json({ message: "failed to delete user" })
    //     }
    //     console.log("data", tour);
    //     res.status(200).json({
    //         messaage: 'tour  deleted',
    //         data: tour
    //     })
    // } catch (error) {
    //     console.log('error:', error);
    // }

})