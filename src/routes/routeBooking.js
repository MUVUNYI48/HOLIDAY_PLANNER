import express from 'express'
import { createBooking } from '../controllers/BOOKING/createBooking.js';

const routeBooking=express.Router();

routeBooking.post('/createBooking',createBooking);

export default routeBooking;