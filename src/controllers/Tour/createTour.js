
import { Tour } from "../../models/tourModel.js";
import { catchAsync } from "../../utils/catchAsync.js";
import { v2 as cloudinary } from 'cloudinary';
import AppError from "../../utils/appError.js";

cloudinary.config({
    cloud_name: 'dwv5pqkgd',
    api_key: '836662316736657',
    api_secret: 'nvOBWLEUD6XxWZCEQCsntPkEL6A'
});

export const createTour = catchAsync(async (req, res) => {

    // console.log('................... in upload image  ..............');
    console.log(req.files.gallery);
    let galleryImages = [];

    let image = await cloudinary.uploader.upload(req.files["backdropImage"][0].path)

    for (let index = 0; index < req.files.gallery.length; index++) {
        galleryImages.push((await cloudinary.uploader.upload(req.files.gallery[index].path)).secure_url)
    }

    console.log(galleryImages);

    console.log("this the body", req.body);

    let addToTour = await Tour.create({
        ...req.body,
        backdropImage: image.secure_url,
        gallery: galleryImages
    })

    if (!addToTour) {
        // return res.status(404).json({
        //     message: "failed to save tour"
        // })

        return next(new AppError("failed to create tour", 204))
    }
    res.status(201).json({
        // status: 200,
        message: "tour created successfully",
        data: addToTour

    })


    // try {
    //     console.log(req.files.gallery);
    //     let galleryImages = [];

    //     let image = await cloudinary.uploader.upload(req.files["backdropImage"][0].path)

    //     for (let index = 0; index < req.files.gallery.length; index++) {
    //         galleryImages.push((await cloudinary.uploader.upload(req.files.gallery[index].path)).secure_url)
    //     }

    //     console.log(galleryImages);

    // console.log("url", image.secure_url);

    // req.body.backdropImage = image.secure_url

    // console.log("this the body", req.body);

    // let addToTour = await Tour.create({
    //     ...req.body,
    //     backdropImage: image.secure_url,
    //     gallery: galleryImages
    // })

    // if (!addToTour) {
    //     return res.status(404).json({
    //         message: "failed to save tour"
    //     })
    // }
    // res.status(201).json({
    //     // status: 200,
    //     message: "tour created successfully",
    //     data: addToTour

    // })
    // } catch (err) {
    //     console.log('error:', err.message);
    //     res.json({
    //         message: err.message
    //     })
    // }
})



