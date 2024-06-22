import express from "express";
import {
  deleteUser,
  getUser,
  updateUser,
} from "../controllers/userController.js";
import { checkUserPermission } from "../middleware/checkUserPermission.js";

const router = express.Router();

router.get("/", checkUserPermission("readOwn", "account"), getUser);
router.patch("/:id", checkUserPermission("updateOwn", "account"), updateUser);
router.delete("/:id", checkUserPermission("deleteOwn", "account"), deleteUser);

export default router;
