import express from "express";
import { v4 as uuidv4 } from "uuid";
import { createUser, deleteUserById, getAllUser, getUserById } from "../controllers/user-controller";
uuidv4();

const router = express.Router();

let users = [];

router.get("/", getAllUser)

router.post("/", createUser)

router.get("/:id", getUserById);

router.delete("/:id", deleteUserById);


router.patch("/:id", (req, res) => {

  const {id} = req.params;
  const {firstname, lasname, age} = req.body; 
  
  const user = users.find((user) => user.id === id);

  if(firstname) user.firstname = firstname;
  if(lasname) user.lasname = lasname; 
  if(age) user.age = age;

  res.send(`Id user ${id} update `);


})

export default router;
