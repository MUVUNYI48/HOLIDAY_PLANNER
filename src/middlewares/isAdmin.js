import { User } from "../models/userModels.js";

export const isAdmin = async (req, res, next) => {
    try {
        let userId = req.params.id;

        let user = await User.findById(userId); // Use findById directly

        if (user) {
            if (user?.role === 'admin') {
                return res.status(302).json({
                    message: `You are ${user.role}, you have access on this data: `,
                    data: user
                });
            }
            // If user is not an admin
            res.status(403).json({
                message: `You are not an admin, no access`
            });
        } else {
            // User not found
            res.status(404).json({
                message: 'User not found'
            });
        }

        // Call next() outside the if block
        next();
    } catch (err) {
        console.log('error', err);
        res.status(500).json({
            message: "Internal server error"
        });
    }
};
