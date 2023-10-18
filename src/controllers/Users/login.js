import { User } from "../../models/userModels.js";
import { createToken } from "../../utils/createToken.js";
import { comparePassword } from "../../utils/passwordFunction.js";


export const login = async (req, res) => {
    try {

        console.log(req.body.email)

        let newUserEmail = req.body.email;
        let newUserPassword = req.body.password;

        const user = await User.findOne({ email: newUserEmail })
        console.log('user', req.body.email)
        if (!user) {
            return res.json({
                message: "user not found",
            })
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
            
            // console.log('......................................')
            // console.log('req.body.password:',req.body.password);
            // console.log('new password: ',user.password)
            // console.log('ispasswordcorrect:', isPasswordCorrect);

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

    } catch (error) {
        console.log('error:', error.message);
        res.status(200).json({
            message: "internal server error"
        })
    }

}

