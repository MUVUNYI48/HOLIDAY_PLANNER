const PaypackJs = require("paypack-js").default;

const paypack = PaypackJs.config({
    client_id: "0d913cdc-7d80-11ee-9304-deaddb65b9c2",
    client_secret: "4aee3adb66115b49b7628ff6bf0a3259da39a3ee5e6b4b0d3255bfef95601890afd80709"
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