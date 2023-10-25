import express from 'express'
import { createBooking } from '../controllers/BOOKING/createBooking.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const routeBooking=express.Router();

routeBooking.post('/createBooking',verifyToken,createBooking);

export default routeBooking;