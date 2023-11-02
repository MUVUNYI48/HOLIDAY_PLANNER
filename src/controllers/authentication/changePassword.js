import { comparePassword, hashPassword } from "../../utils/passwordFunction.js";
import { User } from "../../models/userModels.js";

export const changePassword = async (req, res) => {
    try {
        //access one by one from req.body
        const { currentpassword, newpassword } = req.body;

        //this user is decoded
        let { userId } = req;

        let user = await User.findById(userId);

        let isPasswordCorrect = await comparePassword(currentpassword, user.password)

        if (!isPasswordCorrect) {
            return res.status(401).json({
                message: 'password is not correct'
            })
        }

        let hashedPassword = await hashPassword(newpassword);

        user.password = hashedPassword;

        user.save();

        res.status(200).json({
            message: 'password have been changed successfully 👍'
        })

    } catch (error) {
        console.log('error', error)
    }
}