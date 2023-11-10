const PaypackJs = require("paypack-js").default;
 require("dotenv").config();

const paypack = PaypackJs.config({
    client_id: process.env.CLIENT_ID,
    client_secret: process.env.CLIENT_SECRET,
});

export const cashout = async (req, res) => {

    await paypack.cashout({
        number: "0781632401",
        amount: 100,
        environment: "development",
    })
        .then((res) => {
            res.status(200).json({
                data: res.data,
            })
            console.log(res.data);
        })
        .catch((err) => {
            console.log(err);
            res.json({ error: err});
        });
}