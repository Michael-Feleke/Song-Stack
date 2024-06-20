import express from "express";
import {
  userLogin,
  userSignup,
  userLogout,
} from "../controllers/authController.js";
import { validateAuth } from "../validation/validateAuth.js";
import { checkEmailUnique } from "../middleware/checkEmailUnique.js";

const router = express.Router();

router.post("/signup", validateAuth, checkEmailUnique, userSignup);
router.post("/login", userLogin);
router.get("/logout", userLogout);

export default router;
