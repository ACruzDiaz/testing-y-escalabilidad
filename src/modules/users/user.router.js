import { Router } from "express";
import { userController } from "./user.controller.js";
import { userDao } from "./user.dao.js";
import { validateSchema } from "../../common/middlewares/validateSchema.js";
import { objectIdSchema } from "../../common/schemas/objectId.schema.js";
import { updateSchema } from "../auth/auth.schemas.js";

const router = Router();

router.get("/mocks/:amount", userController.createUsersMocks);
router.get("/", userController.getAll);
router.get("/:id", validateSchema(objectIdSchema), userController.getOne)
router.put("/:id", validateSchema(objectIdSchema), validateSchema(updateSchema), userController.update)
router.delete("/:id", validateSchema(objectIdSchema), userController.remove)

export default router;