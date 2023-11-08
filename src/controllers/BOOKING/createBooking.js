import { Booking } from "../../models/bookModel.js";
import { Tour } from "../../models/tourModel.js";
import { User } from "../../models/userModels.js";
import AppError from "../../utils/appError.js";
import { catchAsync } from "../../utils/catchAsync.js";
import nodemailer from 'nodemailer';

export const createBooking = catchAsync(async (req, res) => {

    const tourId = req.body.tourID;
    const { userId } = req;
    // const { email } = req

    let tourid = await Tour.findOne({ _id: tourId });

    // if (tourId && userId) {
    //     return res.json({
    //         message: "you have already booked this tour"
    //     })
    // }

    console.log('TOUR ID:', tourId);

    let user = await User.findOne({ _id: userId });

    // console.log('user id:', user.email);
    let now = new Date();

    const clock = now.toUTCString();

    if (!tourid) {
        // return res.json({
        //     message: "booking data not found "
        // })

        return next(new AppError('Tour is not available', 404));
    }

    // console.log('userId :', userId);
    // console.log('clovck :', clock);

    let booked = await Booking.create({
        ...req.body, UserID: userId, date: clock, whoBooked: user, tourBooked: tourid
    });

    if (booked) {

        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: process.env.EMAIL,
                pass: process.env.PASSWORD,
            }
        });

        // Define the email options
        const mailOptions = {
            from: process.env.EMAIL,
            to: user.email,
            subject: ' Email',
            text: 'your booking has been successfully'
        };

        transporter.sendMail(mailOptions, (error, info) => {

            if (error) {
                console.log('Error:', error);
                return res.status(500).json({
                    error: 'Email sending failed',
                    contactData: contactData
                });
            }

            console.log('-------- message for booking request--')
            const url = `http://www.gmail.com/delivery-status/${info.messageId}`;
            console.log("URL", url);

            let infoData = info.response;

            res.status(201).json({
                msg: "you have booked a tour,check confirmation email ",
                infoData: infoData
            });

        });

    }

})