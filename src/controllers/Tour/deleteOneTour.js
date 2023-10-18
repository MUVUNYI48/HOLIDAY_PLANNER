import { Tour } from "../../models/tourModel.js";

export const deleteOneTour =async(req,res)=>{

    let Id=req.params.id

let tour= await Tour.deleteOne({_id:Id})
    if(tour){
        console.log("data",tour);
       return  res.json({
            messaage:'tour was deleted'
        })
    }
    console.log("error:",err)

}