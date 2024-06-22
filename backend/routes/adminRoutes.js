import express from "express";
import {
  deleteUser,
  getUsers,
  updateUser,
} from "../controllers/userController.js";
import { checkUserPermission } from "../middleware/checkUserPermission.js";

const router = express.Router();

router.get("/users", checkUserPermission("readAny", "account"), getUsers);
router.patch(
  "/users/:id",
  checkUserPermission("updateAny", "account"),
  updateUser
);
router.delete(
  "/users/:id",
  checkUserPermission("deleteAny", "account"),
  deleteUser
);

export default router;
