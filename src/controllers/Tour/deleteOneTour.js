import { Tour } from "../../models/tourModel.js";

export const deleteOneTour = async (req, res) => {

    try {

        let Id = req.params.id

        let tour = await Tour.findByIdAndDelete(Id)
        console.log(tour,'user');
        if (!tour) {
            return res.json({ message: "failed to delete user" })
        }
        console.log("data", tour);
        res.status(200).json({
            messaage: 'tour  deleted',
            data: tour
        })
    } catch (error) {
        console.log('error:', error);
    }

}