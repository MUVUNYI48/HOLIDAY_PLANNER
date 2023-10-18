import { User } from "../models/userModels.js";

export const isAdmin = async (req, res, next) => {
    try {
        let userId = req.params.id

        let user = await User.findById({ _id: userId });
        console.log('user:', userId);

        if (user?.role == 'admin') {
            return res.status(302).json({
                message: `you are ${user.role},you have access`,
                // data: user[0].role
            })
        }
        res.status(404).json({
            message: `you are ${user.role},no access`
        })

        next();

    } catch (err) {
        console.log('error', err);
        res.status(500).json({
            message: "intenal sever error"
        })
    }

} 