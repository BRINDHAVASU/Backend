import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import connectDb from "./config/db.js";
dotenv.config();
const app = express();
connectDb();
//using express
app.use(cors());
//default middeware
app.use(express.json());
//dummy  route
app.get("/",(req,res)=>{
    res.send("welcome to our back-end😍")
})

//initailzing port and starting the server
const port = 5000;
app.listen(port,()=>{
    console.log(`server started at ${port}and running`)
})