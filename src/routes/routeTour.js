import express from 'express'
import {  createTour} from '../controllers/Tour/createTour.js';
import multer from 'multer';
import appRouter from '../middlewares/multerImage.js';
import { deleteOneTour } from '../controllers/Tour/deleteOneTour.js';
import { getAllTour } from '../controllers/Tour/getAllTour.js';
import { getOneTour } from '../controllers/Tour/getOneTour.js';


const routeTour=express.Router();

// routeUser.post('/createTour',createTour);
routeTour.post('/pictures',appRouter,createTour);
routeTour.delete('/deleteOneTour/:id',deleteOneTour);
routeTour.get('/getAllTour',getAllTour);
routeTour.get('/getOneTour/:id',getOneTour);

export default routeTour