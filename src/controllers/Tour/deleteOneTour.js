import { Tour } from "../../models/tourModel.js";

export const deleteOneTour = async (req, res) => {

    let Id = req.params.id

    let tour = await Tour.deleteOne({ _id: Id })
    if (tour) {
        console.log("data", tour);
        return res.json({
            messaage: 'tour was deleted',
            data: tour
        })
    } else (data.deletedCount === 0)
    {
        res.json({ message: "data have been already deleted" })
    }
    console.log("error:", err)

}