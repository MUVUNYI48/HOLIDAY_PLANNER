import express from 'express'
import { createTour} from '../controllers/Tour/createTour.js';
import upload from '../middlewares/multerImage.js';
import { deleteOneTour } from '../controllers/Tour/deleteOneTour.js';
import { getAllTour } from '../controllers/Tour/getAllTour.js';
import { getOneTour } from '../controllers/Tour/getOneTour.js';
import { isAdmin } from '../middlewares/isAdmin.js';
import { verifyToken } from '../middlewares/verifyToken.js';
import { updateTour } from '../controllers/Tour/updateOneTour.js';


const routeTour=express.Router();

/**
 * @swagger
 * 
 * components:
 *   schemas:
 *     Tour:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *         destination:
 *           type: string
 *         backdropImage:
 *           type: string
 *           format: binary
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         duration:
 *           type: string
 *         groupSize:
 *           type: string
 *         price:
 *           type: string
 *         discount:
 *           type: string
 *         tourType:
 *           type: string
 *         departure:
 *           type: string
 *         seats:
 *           type: string
 *         fromMonth:
 *           type: string
 *         toMonth:
 *           type: string
 *         departureTime:
 *           type: string
 *         returnTime:
 *           type: string
 *         gallery:
 *           type: array
 *           items:
 *            type: file
 *            format: binary
 *
 */
/** 
 * @swagger
 * /api/v1/tours/createTours:
 *   post:
 *     tags: [Tours]
 *     summary: Create a new tour
 *     requestBody:
 *       content:
 *         multipart/form-data:
 *           schema:
 *             $ref: '#/components/schemas/Tour'
 *     responses:
 *       '201':
 *         description: Tour created successfully
 * 
 * 
 * 
 */

routeTour.post('/createTourS',upload,createTour);


/**
* @swagger
 *  /deleteOneTour/{id}:
 *  delete:
 *     tags: [Tours]
 *     summary: Delete a tour by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the tour to delete.
 *     responses:
 *       '204':
 *         description: Tour deleted successfully
 *       '404':
 *         description: Tour not found
*/

routeTour.delete('/deleteOneTour/:id',verifyToken,isAdmin,deleteOneTour);

/** 
* @swagger
* tags:
*   name: Tours
*   description: Operations related to tours
*
* /api/v1/tours/getAllTours:
*   get:
*     tags: [Tours]
*     summary: Get all tours
*     responses:
*       '200':
*         description: Successful response
*         content:
*           application/json:
*             schema:
*               type: array
*               items:
*                 type: object 
*                 properties:
*                   _id:
*                     type: string
*                   destination:
*                     type: string
*                   backdropImage:
*                     type: string
*                   title:
*                     type: string
*                   description:
*                     type: string
*                   duration:
*                     type: string
*                   groupSize:
*                     type: string
*                   price:
*                     type: string
*                   discount:
*                     type: string
*                   tourType:
*                     type: string
*                   departure:
*                     type: string
*                   seats:
*                     type: string
*                   fromMonth:
*                     type: string
*                   toMonth:
*                     type: string
*                   departureTime:
*                     type: string
*                   returnTime:
*                     type: string
*/

routeTour.get('/getAllTours',getAllTour);


/** 
 * 
 *@swagger
 *  /api/v1/tours/getOneTour/{id}:
 *   get:

 *     tags: [Tours]
 *     summary: Get tour data by ID
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID of the tour to retrieve.
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Tour'
 *       '404':
 *         description: Tour not found
 * 
 */


routeTour.get('/getOneTour/:id',getOneTour);
routeTour.post('/updateOneTour/:id',updateTour)

export default routeTour    