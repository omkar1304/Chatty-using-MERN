import express from "express";
import {
    checkAuth,
  login,
  logout,
  signup,
  updateProfile,
} from "../controllers/auth.controller.js";
import { protectRoute } from "../middleware/auth.middleware.js";

const router = express.Router();

// GET Routes 👇
router.get("/check", protectRoute, checkAuth)

// POST Routes 👇
router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

// PUT Routes 👇
router.put("/update-profile", protectRoute, updateProfile);



export default router;
