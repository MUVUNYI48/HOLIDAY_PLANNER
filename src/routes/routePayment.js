import { deposit } from "../controllers/payment";
import { cashout } from "../controllers/payment/cashout";

const express=require("express");

export const routePayment= express.Router();

routePayment.post('/deposit',deposit);
routePayment.get('/payment',cashout);


