import express from 'express'
import { createBooking } from '../controllers/BOOKING/createBooking.js';
import { verifyToken } from '../middlewares/verifyToken.js';
import { getAllBookedTours } from '../controllers/BOOKING/getAllTours.js';
import { numberOfBooked } from '../controllers/BOOKING/numberOfBooked.js';

const routeBooking = express.Router();


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
 *           userID:
 *             type: string
 *           isPayed:
 *             type: boolean
 *           whoBooked:
 *             type: object
 *           tourbooked:
 *             type: object
 *           numberOfTicket:
 *             type: number
 *           status:
 *             type: string
 *             
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

routeBooking.post('/createBooking', verifyToken, createBooking);

/**
 * @swagger
 * 
 * /api/v1/booking/getAllBookedTours:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     tags: [Booking]
 *     summary: get all BookedTours
 *     parameters:
 *       - name: _id
 *         in: path
 *         schema:
 *           type: string
 *         required: false
 *       - in: query
 *         name: userID
 *         schema:
 *           type: string
 *         required: false
 *       - in: query
 *         name: tourID
 *         schema:
 *           type: string
 *         required: false
 *       - in: query
 *         name: paymentMethod
 *         schema:
 *           type: string
 *         required: false
 *       - in: query
 *         name: date
 *         schema:
 *           type: date
 *         required: false
 *       - in: query
 *         name: isPayed
 *         schema:
 *           type: boalean
 *         required: false
 *       - in: query
 *         name: numberOfTicket
 *         schema:
 *           type: number
 *         required: false
 *       - in: query
 *         name: status
 *         schema:  
 *           type: string
 *         required: false
 * 
 *     responses:
 *       '200':
 *          description: bookedTours found successfully
 *       '404':
 *          description: bookedTours not found
 *       '403':
 *          description: user not allowed to access this
 * 
 * 
 */

routeBooking.get('/getAllBookedTours', verifyToken, getAllBookedTours)

/**
 * @swagger
 * /api/v1/booking/numberOfBooked:
 *  get:
 *     security:
 *       - bearerAuth: []
 *     tags: [Booking]
 *     summary: get all number of booked tour 
 *     parameters:
 *       - name: year
 *         in: query 
 *         schema:
 *           type: string
 *         required: true
 *       - in: query
 *         name: label
 *         schema:
 *           type: string
 *         required: false
 *       - in: path
 *         name: count
 *         schema:
 *           type: number
 * 
 *     responses:
 *       '200':
 *          description: bookedTours found successfully
 *       '404':
 *          description: bookedTours not found
 *       '403':
 *          description: user not allowed to access this
 * 
 */

routeBooking.get('/numberOfBooked', verifyToken, numberOfBooked)

export default routeBooking;