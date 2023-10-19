import express from "express";
import routeTour from "./routeTour.js";
import { routeUser } from "./routeUser.js";
// import routeBooking from "./routeBooking.js";

const tourRouter = express.Router();

tourRouter.use('/tours', routeTour);
routeUser.use('/users', routeUser);
// routeBooking.use('/booking',routeBooking)

export default tourRouter;