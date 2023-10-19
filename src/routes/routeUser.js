import bodyParser from "body-parser";
import express  from "express";
import { signUp } from "../controllers/Users/signUp.js";
import { getAllUser } from "../controllers/Users/getAllUser.js";
import { login } from "../controllers/Users/login.js";
import { verifyToken } from "../middlewares/verifyToken.js";
// import { createTour } from "../controllers/Tour/createTour.js";
import Upload from "../middlewares/multerImage.js";

const app=express();
app.use(bodyParser.json())


export const routeUser=express.Router();
export const routeImage=express.Router();

routeUser.post('/signUp',signUp);
routeUser.get('/getAllUser',getAllUser);
routeUser.post('/login',login);

export default routeUser;
// routeImage.post('/picture',upload.single("image"),createTour);

