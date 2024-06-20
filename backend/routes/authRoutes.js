import express from "express";
import { userLogin, userSignup } from "../controllers/authController.js";
import { validateAuth } from "../validation/validateAuth.js";
import { checkEmailUnique } from "../middleware/checkEmailUnique.js";

const router = express.Router();

router.post("/signup", validateAuth, checkEmailUnique, userSignup);
router.post("/login", userLogin);

export default router;
