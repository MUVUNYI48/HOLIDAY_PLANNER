import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose';
import dotenv from 'dotenv'
import { routeUser } from './src/routes/routeUser.js';
import tourRouter from './src/routes/index.js';
import routeBooking from './src/routes/routeBooking.js';
import routeContact from './src/routes/routeContact.js'
import cors from 'cors'
import { swaggerSpec } from './swaggerConfig.js';

//this will be for error handling
import AppError from './src/utils/appError.js';
import { errorController } from './src/controllers/errorController.js';
import swaggerUi from 'swagger-ui-express'
import { routePayment } from './src/routes/routePayment.js';



dotenv.config()
const PORT = 8080
const app = express();

app.use(cors())
app.use(bodyParser.json())

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

app.use('/api/v1', tourRouter);
app.use('/api/v1', routeUser);
app.use('/api/v1', routeBooking);
app.use('/api/v1', routeContact);
app.use('/api/v1', routePayment);

app.all('*', (req, res, next) => {

    // res.status(404).json({
    //     status: 'failed',
    //     message: `couldn't find: ${req.originalUrl} on this server`
    // });
    // const err = new Error(`couldn't find: ${req.originalUrl} on this server`);
    // err.status = 'failed 😘';
    // err.statusCode = 404;
    //next(err); #this will passed to the error global error handler

    next(new AppError(`couldn't find: ${req.originalUrl} on this server`, 404));

})

//global error handler
app.use(errorController);



// app.listen(PORT, () => {
//     console.log(`the app is listening on the ${PORT}`)
// })

mongoose.connect(process.env.DB_CONNECTION_PRO).then((res) => {
    console.log('database connected');
})



app.listen(PORT, () => {
    console.log(`Node server listening at http://localhost:${PORT}/`);
});
