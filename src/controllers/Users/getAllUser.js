import { User } from "../../models/userModels.js";
import { catchAsync } from "../../utils/catchAsync.js";
import AppError from "../../utils/appError.js";

export const getAllUser = catchAsync(async (req, res) => {

    let data = await User.find();

    if (!data) {

        return (new AppError("users not found ", 404));
    }

    res.json({
        message: "list of users",
        data
    })

    // if (data) {
    //     res.json({
    //         message: "list of users",
    //         data
    //     })
    // }


    // #####################################
    // catch was replaced with ( 🙌 catchAsync (●'◡'●) )error handler

    // try {
    //     let data = await User.find();

    //     if (data) {
    //         res.json({
    //             message: "list of users",
    //             data
    //         })
    //     }
    // } catch (error) {
    //     console.log(error.message)
    // }



})