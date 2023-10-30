import { User } from "../../models/userModels.js";

export const deleteUser = async (req, res) => {

    try {


        // let Id = req.params.id

        // let tour = await Tour.findByIdAndDelete(Id)


        const req_id = req.params.id;
        const user = await User.findById(req_id);
        console.log("user:", user);

        if (user === null) {
            return res.status(404).json({ message: "User not found" });
        }

        await User.findByIdAndDelete(req_id);
        console.log("user", user);
        return res.status(200).json({
            msg: "user deleted successfully 👍."
        }
        )

    } catch (error) {
        res.status(404).send(
            {
                message: error.message
            }
        )
    }

}