import { Router } from "express";
import userRouter from "../modules/users/user.router.js";
import petRouter from "../modules/pets/pet.router.js";
import { generateData } from "./mocks.controller.js";


const router = Router();


router.use("/mocks", userRouter)
router.post("/generateData", generateData)
export default router;