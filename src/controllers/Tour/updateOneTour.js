import { Tour } from "../../models/tourModel.js";
import { catchAsync } from "../../utils/catchAsync.js";

export const updateTour = catchAsync(async (req, res) => {


    const req_id = req.params.id;
    const data = req.body;

    const filterData = await Tour.findById({ _id: req_id });

    console.log("filterData", filterData);

    if (req_id) {
        const updatedData = await Tour.findByIdAndUpdate(req_id, data);
        console.log("Data", data);
        if (updatedData) {
            res.status(201).json({
                message: "data updated"
            })
        } else {
            console.log('data not found');
        }
    }


    //above there is an error good error handler
    // try {

    //     const req_id = req.params.id;
    //     const data = req.body;

    //     const filterData= await Tour.findById({ _id: req_id});

    //     console.log("filterData", filterData);

    //     if (req_id) {
    //         const updatedData = await Tour.findByIdAndUpdate(req_id, data );
    //         console.log("Data", data);
    //         if (updatedData) {
    //             res.status(201).json({
    //                 message: "data updated"
    //             })
    //         } else {
    //             console.log('data not found');
    //         }

    //     } else {
    //         res.status(401).json({
    //             message: 'user not found',
    //         })
    //     }




    // } catch (error) {
    //     console.log('error', error.message)
    // }
})