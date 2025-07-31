import express from "express";
import { createUser, deleteUserById, getAllUser, getUserById, updateUserById } from "../controllers/user-controller.js";

const router = express.Router();

router.get("/", getAllUser)

router.post("/", createUser)

router.get("/:id", getUserById);

router.delete("/:id", deleteUserById);

router.patch("/:id",updateUserById)

export default router;
