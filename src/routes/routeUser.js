import bodyParser from "body-parser";
import express  from "express";
import { signUp } from "../controllers/Users/signUp.js";
import { getAllUser } from "../controllers/Users/getAllUser.js";
import { login } from "../controllers/Users/login.js";
import { verifyToken } from "../middlewares/verifyToken.js";
import { changePassword } from "../controllers/authentication/changePassword.js";

const app=express();
app.use(bodyParser.json())

export const routeUser=express.Router();
export const routeImage=express.Router();


/**
 * @swagger
 *  tags:
 *   name: Tours
 *   description: Operations related to tours

 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "652d57fb7998fbed1a256c30"
 *         email:
 *           type: string
 *           example: "gmail@gmail.com"
 *         fullNames:
 *           type: string
 *           example: "muvunyi"
 *         password:
 *           type: string
 *           example: "muvunyi"
 *         phoneNumbers:
 *           type: string
 *           example: "0781632401"
 *         location:
 *           type: string
 *           example: "muhanga"
 *
 * /api/v1/users/getAllUsers:
 *   get:
 *     tags: [Users]
 *     summary: Get a list of users
 *     parameters:
 *       - name: _id
 *         in: path
 *         schema:
 *           type: string
 *         required: false
 *       - in: query
 *         name: email
 *         schema:
 *           type: string
 *         required: false
 *       - in: query
 *         name: fullNames
 *         schema:
 *           type: string
 *         required: false
 *       - in: query
 *         name: password
 *         schema:
 *           type: string
 *         required: false
 *       - in: query
 *         name: phoneNumbers
 *         schema:
 *           type: string
 *         required: false
 *       - in: query
 *         name: location
 *         schema:
 *           type: string
 *         required: false
 *     responses:
 *       '200':
 *         description: Successful response
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 */


routeUser.get('/getAllUsers',getAllUser);

/** 
 *@swagger
 * /api/v1/users/signup:
 *   post:
 *     tags: [Users]
 *     summary: User signup
 *     description: create a user .
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               fullNames:
 *                 type: string
 *               password:
 *                 type: string
 *               phoneNumbers:
 *                 type: string
 *                 items:
 *                   type: string
 *               location:
 *                 type: string
 *     responses:
 *       '200':
 *         description: Successful login
 *       '401':
 *         description: Unauthorized - Invalid credentials
 *       '500':
 *         description: Internal server error


 */

routeUser.post('/signup',signUp);

/**
 * @swagger
 * /api/v1/users/login:
 *   post:
 *     tags: [Users]
 *     summary: User login
 *     description: Authenticates a user with their email and password.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *             required:
 *               - email
 *               - password
 *     responses:
 *       '200':
 *         description: Successful login
 *       '401':
 *         description: Unauthorized - Invalid credentials
 *       '500':
 *         description: Internal server error */


routeUser.post('/login',login);
/**
 * @swagger
 * /api/v1/users/changepassword:
 *  post:
 *    tags: [Users]
 *    summary: update password
 *    description: change password of user
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            type: object
 *            properties:
 *              currentpassword:
 *                type: string
 *              newpassword:
 *                type: string
 *            required: 
 *              -currentpassword
 *              -newpassword
 *    responses:
 *      '201':
 *         description: password changed successfully 
 *      '401':
 *         description: unAuthorized user
 *      '500':
 *         description: intenal server error  
 * 
 */
routeUser.post('/changepassword',verifyToken,changePassword);

export default routeUser;
// routeImage.post('/picture',upload.single("image"),createTour);

