
export const counter = (model)=>{

    return (req,res,next)=>{

        const options = {
            page: parseInt(req.query.page),
            limit: parseInt(req.query.limit),
        };
    
       model.paginate({}, options).then((data) => {
           
            res.counter = data;
            next();
            // res.status(200).json({
            //     tours: data
            // })
            // is is code error
        }).catch((err) => {
            res.status(err.status || 500).json({
                error: err.message
            });
        });
    }


}