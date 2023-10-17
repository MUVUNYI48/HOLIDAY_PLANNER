import jwt  from "jsonwebtoken";

export const createToken = (data) => {
    let token = jwt.sign(data,process.env.JWT_SECRET,({
        expiresIn: process.env.JWT_EXP
    }))
   
    return token;
}