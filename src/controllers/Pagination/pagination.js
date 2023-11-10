import { Tour } from "../../models/tourModel";

const PAGE_SIZE = 6;

export const pagination = async (req, res) => {

    // const page = parseInt(req.query.page);
    // const skip = (page - 1) * PAGE_SIZE;
    // let tour = await Tour.find()
    // .skip(skip)
    // .limit(6);
    //     if (!tour) {
    //         console.error('Could not find tour');
    //     }
    //     res.json({
    //         data: tour
    //     })

    const options={
        page:parseInt(req.query.page),
        limit:parseInt(req.query.limit),
    };
    Tour.paginate({}, options).then((data)=>{
    res.status(200).json({
        tours:data
    })
    }).catch((err)=>{
        res.status(err.status || 500).json({
            error: err.message
        });
    });

}