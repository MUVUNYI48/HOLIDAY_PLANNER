import { Tour } from "../../models/tourModel.js";

export const getOneTour = async (req, res) => {
    let Id = req.params.id;

    let onetour = await Tour.findOne({ _id: Id })

    if (onetour) {
        return res.status(302).json({
            message: 'one tour deleted successfully',
            onetour
        })
    } else {
        return res.status(412).json({
            message: 'data not found'
        })
    }

}