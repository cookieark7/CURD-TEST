import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import 'dotenv/config';
import pool from "./config/db.js";
import errorHnadling from "./middlewares/errorHandler.js";
import userRoutes from "./routes/userRoutes.js"
import createUserTable from "./data/createUserTable.js";


dotenv.config();

const app = express();
console.log(process.env.PORT,process.env.USER,"in env")
const port = process.env.PORT || 3001
//create user table before starting the r
createUserTable();
//middlewares
app.use(express.json());
app.use(cors());

app.get("/",async(req,res)=>{
    const result = await pool.query("SELECT current_database()");
    res.send(`The database name is ${result}`)
})

//routes
app.use("/api",userRoutes)


//error handling middleware
app.use(errorHnadling)

//server listining
app.listen(port,()=>{
    console.log(`port listining to ${port}`)
})