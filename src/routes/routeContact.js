import express from "express";
import { createContact } from "../controllers/Contact/createContact.js";


const contactRouter = express.Router();


/**
 * @swagger
 * 
 *   components:
 *     schemas:
 *       contact:
 *         type: object
 *         properties:
 *           email:
 *             type: string
 *           message: 
 *             type: string
 * /api/v1/contact/createContact:
 *   post:
 *     tags: [contact]
 *     summary: create Contact
 *     requestBody:
 *       content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/contact'
 *     responses:
 *       '201':
 *          descrption: contacts created successfully
 *       
 */

contactRouter.post('/createContact', createContact);

export default contactRouter;

