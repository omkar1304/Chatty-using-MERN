import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import {
  getMessages,
  getSidebarUsers,
  sendMessage,
} from "../controllers/message.controller.js";

const router = express.Router();

// GET Routes 👇
router.get("/users", protectRoute, getSidebarUsers);
router.get("/:id", protectRoute, getMessages);

// POST Routes 👇
router.post("/send/:id", protectRoute, sendMessage)

export default router;
