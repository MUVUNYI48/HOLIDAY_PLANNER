import jwt from "jsonwebtoken";

export const verifyToken = async (req, res, next) => {
    try {
        let auth = req.headers.authorization;
        let token = auth?.split(' ')[1];
        console.log(" token", token)
        if (!token) {
            return res.status(401).json({
                message: "no access token provided"
            })
        }
        console.log("hello there");

        jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
            if (err) {
                console.log('verify error:', err);
                return res.status(404).json({
                    message: "failed to verfiy", err
                })
            }
            console.log(decoded, 'decoded');
            req.userId = decoded.id;

            next();
        });
    } catch (error) {
        console.log(error, "error on server")
        return res.status(500).json({
            message: "internal error server"
        })
    }
}