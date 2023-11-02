import { express } from "express";

app.use((req,res,next) => {
    req.requestTime=new Date().toISOString();
    next();
})