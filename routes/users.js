import express from "express";
import { v4 as uuidv4 } from "uuid";
import { createUser, deleteUserById, getAllUser, getUserById, updateUserById } from "../controllers/user-controller";
uuidv4();

const router = express.Router();

let users = [];

router.get("/", getAllUser)

router.post("/", createUser)

router.get("/:id", getUserById);

router.delete("/:id", deleteUserById);

router.patch("/:id",updateUserById)

export default router;
