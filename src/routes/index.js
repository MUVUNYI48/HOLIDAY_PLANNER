import express from "express";
import routeTour from "./routeTour.js";
import { routeUser } from "./routeUser.js";

const tourRouter = express.Router();

tourRouter.use('/tours', routeTour);
tourRouter.use('/users', routeUser);

export default tourRouter;