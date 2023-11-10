const PaypackJs = require("paypack-js").default;
require('dotenv').config();

const paypack = PaypackJs.config({
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
});

export const deposit = (req, res) => {
    const number = req.body.number;
    const amount = req.body.amount;

    paypack.cashin({
        number: number,
        amount: amount,
        environment: "development",
    })
    .then((response) => {
        res.json({
            data: req.body,
        });
        console.log(response);
    })
    .catch((err) => {
        console.log(err);
    });
};
