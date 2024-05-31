import express from "express";
import { createEmployee, deleteEmployee, editEmployee, employeeDetails, employeeDetailsById } from "../Controllers/employeeController.js";

const router = express.Router();

router.get("/empdetails",employeeDetails);
router.get("/empdetails/:id",employeeDetailsById);
router.post("/createEmployee",createEmployee);
router.put("/editEmployee/:id",editEmployee);
router.delete("/deleteEmployee/:id",deleteEmployee);
export default router;