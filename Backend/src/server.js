import express from "express";
import { ENV } from "./lib/env.js";
const app =express();


app.get("/health",(req,res)=>{
    res.status(200).json({msg:"APi is running "})
})

const PORT =ENV.PORT || 3000;
console.log(PORT);

app.listen(PORT,()=>{
    console.log("server is running on Port: ",PORT)
})