import multer from "multer";
import express from "express";
import { Tour } from "../../models/tourModel.js";

import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'dwv5pqkgd',
    api_key: '836662316736657',
    api_secret: 'nvOBWLEUD6XxWZCEQCsntPkEL6A'
});


export const createTour = async (req, res) => {
    console.log('................... in upload image  ..............');

    try {
        console.log(req.file);

        let image = await cloudinary.uploader.upload(req.file.path)

        console.log("url", image.secure_url);

        req.body.backdropImage = image.secure_url

        console.log("this the body", req.body);

        let addToTour = await Tour.create(req.body)

        if (!addToTour) {
            return res.status(404).json({
                message: "failed to save tour"
            })
        }
        res.status(201).json({
            // status: 200,
            message: "tour created successfully",
            data: addToTour

        })
    } catch (err) {
        console.log('error:', err.message);
        res.json({
            message: err.message
        })
    }
}



