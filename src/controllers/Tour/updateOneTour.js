import { Tour } from "../../models/tourModel.js";

export const updateTour = async (req, res) => {
    try {

        const req_id = req.params.id;

        const data = req.body;

        if (req_id) {
            let updatedData = await Tour.findOneAndUpdate({_id: req_id, data});
                
            if(updatedData){
                console.log('data found',updatedData);
            }else{
                console.log('data not found',updatedData);
            }

            res.status(201).json({
                message: "data updated", updatedData
            })
        } else {
            res.status(401).json({
                message: 'user not found',
            })
        }




    } catch (error) {
        console.log('error',error.message)
    }
}