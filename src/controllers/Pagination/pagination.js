import { Tour } from "../../models/tourModel";

const PAGE_SIZE = 6;

export const pagination = async (req, res) => {

    res.status(200).json(res.counter);
    
}