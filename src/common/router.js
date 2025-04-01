import { Router } from "express";
import userRouter from "../modules/users/user.router.js";
import petRouter from "../modules/pets/pet.router.js";

const router = Router();

router.use("/users", userRouter); 
router.use("/pets", petRouter);


export default router;