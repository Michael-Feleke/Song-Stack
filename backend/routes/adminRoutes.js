import express from "express";
import {
  deleteOtherUser,
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
  deleteOtherUser
);

export default router;
