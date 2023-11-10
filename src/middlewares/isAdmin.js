import { User } from "../models/userModels.js";

export const isAdmin = async (req, res, next) => {
    try {
        let { userId } = req;
        console.log(userId, 'this is id ');
        let user = await User.findById(userId); // Use findById directly
        if (!user) {
            // User not found
            return res.status(404).json({
                message: 'User not found'
            });
        }
        if (user?.role !== 'admin') {
            return res.status(403).json({
                user: userId,
                message: `You are not an admin, no access`
            });
        }

        next();

        // Call next() outside the if block

    } catch (err) {
        console.log('error', err);
        res.status(500).json({
            message: "Internal server error"
        });
    }
};
