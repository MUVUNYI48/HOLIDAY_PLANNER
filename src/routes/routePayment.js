import { deposit } from "../controllers/payment";
import { cashout } from "../controllers/payment/cashout";

const express=require("express");
export const routePayment= express.Router();

/**
 * @swagger
 * 
 *   components:
 *     schemas:
 *       Payment:
 *         type: object
 *         properties:
 *           userID:
 *             type: string
 *           paymentMethod:
 *             type: string
 *           number:
 *             type: string
 *           amount:
 *             type: string
 *                  
 * /api/v1/trans/deposit:
 *   post:
 *     security:
 *       - bearerAuth: []
 *     tags: [Payment]
 *     summary: deposit transaction
 *    
 *     requestBody:
 *       content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Payment'
 * 
 *     responses:
 *       '201':
 *          description: transaction of deposit created successfully
 *       '503':
 *          description: failed to get info transaction
 *       
 *   
 */

routePayment.post('/deposit',deposit);

/**
 * @swagger
 * /api/v1/trans/cashout:
 *   get:
 *     security:
 *       - bearerAuth: []
 *     tags: [Payment]
 *     summary: cashout transaction
 *     parameters:
 *       - name: number
 *         in: path
 *         schema: 
 *           type: string
 *         required: false
 *       - name: amount
 *         in: path
 *         schema: 
 *           type: number
 * 
 *         
 * 
 *     responses:
 *       '201':
 *          description: transaction of cashout created successfully
 *       '200':
 *          description: transaction of cashout
 */

routePayment.get('/payment',cashout);


