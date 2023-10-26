import express from 'express'
import { createBooking } from '../controllers/BOOKING/createBooking.js';
import { verifyToken } from '../middlewares/verifyToken.js';

const routeBooking=express.Router();


/**
 * @swagger
 * 
 *   components:
 *     schemas:
 *       Booking:
 *         type: object
 *         properties:
 *           tourID:
 *             type: string
 *           paymentMethod:
 *             type: string
 * /api/v1/booking/createBooking:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     tags: [Booking]
 *     summary: create Contact
 *    
 *     requestBody:
 *       content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Booking'
 *     responses:
 *       '201':
 *          descrption: contacts created successfully
 *       
 */

routeBooking.post('/createBooking',verifyToken,createBooking);

export default routeBooking;