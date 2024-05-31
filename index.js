import express from "express";
import employees from "./Routers/employeeRouters.js"
import cors from 'cors'
const app = express();
const PORT = 4000;
app.use(express.json());
app.use(cors());
app.use('/api',employees)

app.get('/',(req,res)=>{
    res.status(200).send("api is running successfully")
})

app.listen(PORT,()=>{
    console.log("app is running")
})

