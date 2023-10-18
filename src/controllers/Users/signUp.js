
import { User } from '../../models/userModels.js'
import { createToken } from '../../utils/createToken.js';
import { hashPassword} from '../../utils/passwordFunction.js';
// import bcrypt from "jsonwebtoken"

export const signUp = async (req, res) => {
    try {

        const user = await User.findOne({ email: req.body.email })

        // let newUser = User.create(req.body);
        if (user) {
             return res.json({
                message: "user already existed"
            })
        }

        let hashedPassword = await hashPassword(req.body.password);
        req.body.password = hashedPassword;

        let newUser = await User.create(req.body)

        let token = createToken({
            id: newUser.id,
            email: newUser.email
        })

        console.log('new token:',token)

        res.status(200).json({
            message: "user data inserted successfully",
            acccess_Token: token,
            email: newUser.email,
            fullNames: newUser.fullNames,
            location: newUser.location,
            phoneNumbers: newUser.phoneNumbers
        })

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            message:"internal server error"
        })
    }
}