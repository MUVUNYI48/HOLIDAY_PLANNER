import { User } from "../../models/userModels.js";
import { catchAsync } from "../../utils/catchAsync.js";
import { createToken } from "../../utils/createToken.js";
import { comparePassword } from "../../utils/passwordFunction.js";
import AppError from "../../utils/appError.js";

export const login = catchAsync(async (req, res, next) => {

    console.log(req.body.email)

    let newUserEmail = req.body.email;
    // let newUserPassword = req.body.password;

    const user = await User.findOne({ email: newUserEmail })
    // console.log('user', user);

    if (!user) {

        // return res.json({
        //     message: "user not found",
        // })

        return next(new AppError('User not found', 404));
    }

    let isPasswordCorrect = await comparePassword(
        req.body.password,
        user.password
    );

    if (!isPasswordCorrect) {
        return res.status(401).json({
            message: "wrong password"
        });
    }

    const token = createToken({
        id: user._id,
        email: user.email
    })

    res.status(200).json({
        message: "user logged in successfully",
        access_token: token,
        user: {
            email: user.email,
            location: user.location,
            fullNames: user.fullNames
        }
    })

})

