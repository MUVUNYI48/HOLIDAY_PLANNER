import { User } from "../../models/userModels.js";

export const getAllUser = async (req, res) => {
    try {
        let data = await User.find();

        if (data) {
            res.json({
                message: "list of users",
                data
            })
        }
      

    } catch (error) {
        console.log(error.message)
    }



}