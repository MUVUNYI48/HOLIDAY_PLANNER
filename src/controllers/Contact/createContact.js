import { contact } from "../../models/contactModel.js";
import nodemailer from 'nodemailer';

export const createContact = async (req, res) => {
    let to_email = req.body.email;
    let replying = req.body.replying;

    if (!(to_email && replying)) {
        return res.status(401).json({
            msg: "Data not found",
            contactData: null
        });
    }

    const contactData = await contact.create(req.body);
    
    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: process.env.EMAIL, // Your Gmail email address
            pass: process.env.PASSWORD,
        }
    });

    // Define the email options
    const mailOptions = {
        from: process.env.EMAIL, // Sender email address
        to: to_email, // Recipient email address
        subject: 'Test Email', // Subject line
        text: 'Hello, this is a test email.' // Plain text body
    };

    // Use the transporter to send the email
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log('Error:', error);
            return res.status(500).json({
                error: 'Email sending failed',
                contactData: contactData
            });
        }
            console.log('Email sent:', info.response);
            console.log('Info message Id:', info.messageId);
            console.log(`email sent to :${to_email}`);
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
};
