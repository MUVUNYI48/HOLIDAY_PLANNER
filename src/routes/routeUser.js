import bodyParser from "body-parser";
import express  from "express";
import { signUp } from "../controllers/signUp.js";
import { getAllUser } from "../controllers/getAllUser.js";
import { login } from "../controllers/login.js";
import { verifyToken } from "../middlewares/verifyToken.js";


export const routeUser=express.Router();

routeUser.post('/signUp',signUp);
routeUser.get('/getAllUser',verifyToken,getAllUser);
// routeUser.use(verifyToken)
routeUser.post('/login',login);

