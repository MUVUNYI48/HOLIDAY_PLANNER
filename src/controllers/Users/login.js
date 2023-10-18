import { User } from "../../models/userModels.js";
import { createToken } from "../../utils/createToken.js";
import { comparePassword } from "../../utils/passwordFunction.js";

export const login = async (req, res) => {
    try {

        let newUserEmail = req.body.email;
        let newUserPassword = req.body.password;

        let user = await User.findOne({ email: req.body.email })

        if (!user) {
            return res.json({
                message: "user not found",
            })
        } 
        
        
        let isPasswordCorrect=await comparePassword(req.body.password,user.password);
        
if(!isPasswordCorrect){
    return res.status(401).json({
        message:"wrong password"
    });
}


let token=createToken({
    id:user.id,
    email:user.email
})



res.status(200).json({
    message:"user logged in successfully",
    access_token:token,
    user:{
        email:user.email,
        location:user.location,
        fullNames:user.fullNames
    }
})

    } catch (error) {
        console.log('error:', error.message);
        res.status(200).json({
            message:"internal server error"
        })
    }

}