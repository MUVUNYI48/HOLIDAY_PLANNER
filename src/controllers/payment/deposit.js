const PaypackJs = require("paypack-js").default;

const paypack = PaypackJs.config({
    client_id: "0d913cdc-7d80-11ee-9304-deaddb65b9c2",
    client_secret: "4aee3adb66115b49b7628ff6bf0a3259da39a3ee5e6b4b0d3255bfef95601890afd80709"
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
