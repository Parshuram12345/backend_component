import express from "express";
const router = express.Router(); // router() function inside the express
import StudnetController from "../controller/StudentController.js";
router.post("/addstudents", StudnetController.RegisterID); //post the data in employee collection
router.get("/getstudents", StudnetController.getEmployees);
router.post("/getstudent", StudnetController.getEmployee); //get single employee data 
export default router;
