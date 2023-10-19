import express from 'express'
import {  createTour} from '../controllers/Tour/createTour.js';
import multer from 'multer';
import appRouter from '../middlewares/multerImage.js';
import { deleteOneTour } from '../controllers/Tour/deleteOneTour.js';
import { getAllTour } from '../controllers/Tour/getAllTour.js';
import { getOneTour } from '../controllers/Tour/getOneTour.js';
import { isAdmin } from '../middlewares/isAdmin.js';
import { verifyToken } from '../middlewares/verifyToken.js';


const routeTour=express.Router();

// routeUser.post('/createTour',createTour);
routeTour.post('/createTour',appRouter,createTour);
routeTour.delete('/deleteOneTour/:id',verifyToken,isAdmin,deleteOneTour);
routeTour.get('/getAllTour',getAllTour);
routeTour.get('/getOneTour/:id',getOneTour);

export default routeTour    