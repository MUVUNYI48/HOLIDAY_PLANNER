import { contact } from "../../models/contactModel.js";
import nodemailer from 'nodemailer';

export const createContact = async (req, res) => {

    let to_email = req.body.email;
    let message = req.body.message;

    if (!(to_email && message)) {
        return res.status(401).json({
            msg: "Data not found",
        });
    }

    const contactData = await contact.create(req.body);

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
        to: to_email,
        subject: 'Test Email',
        text: 'Thanks for contact us'
    };

    const replyMessage = {
        from: process.env.EMAIL,
        to: to_email,
        subject: 'Test Email',
        text: 'This is the reply message,feel free to contact us later'
    }


    //!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

    transporter.sendMail(mailOptions, (error, info) => {

        if (error) {
            console.log('Error:', error);
            return res.status(500).json({
                error: 'Email sending failed',
                // contactData: contactData
            });
        }

        // console.log('Email sent:', info.response);
        // console.log('Info message Id:', info.messageId);
        // console.log(`email sent to :${to_email}`);
        // console.log('Delivery URL:', info.getDeliveryUrl(info.messageId));

        console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
        const url = `http://www.gmail.com/delivery-status/${info.messageId}`;
        console.log("URL", url);

        let infoData = info.response;

        res.status(201).json({
            msg: 'Email sent successfully',
            contactData: contactData,
            infoData: infoData
        });

    });


    setTimeout(() => {
        // Use the transporter to send the email
        transporter.sendMail(replyMessage, (error, info) => {

            if (error) {
                console.log('Error:', error);
                return res.status(500).json({
                    error: 'Email sending failed',
                    contactData: contactData
                });
            }

            console.log('>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>><<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<')
            const url = `http://www.gmail.com/delivery-status/${info.messageId}`;
            console.log("this is the setTimeout message")
            console.log("URL", url);

            let infoData = info.response;

            res.status(201).json({
                msg: 'Email of reply sent successfully',
                // contactData: contactData,
                // infoData: infoData
            });

        });


    }, 60000) //after 5 minutes

};

// Use the transporter to send the email


