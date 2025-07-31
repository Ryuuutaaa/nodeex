import express from "express";
import { v4 as uuidv4 } from "uuid";
import { createUser, getAllUser } from "../controllers/user-controller";
uuidv4();

const router = express.Router();

let users = [];

router.get("/", getAllUser)

router.post("/", createUser)

router.get("/:id", (req, res) => {
  const { id } = req.params;

  const findUser = users.find((user) => user.id === id);

  res.send(findUser);
});

router.delete("/:id", (req, res) => {
  const { id } = req.params;

  users = users.filter((user) => user.id !== id);

  res.send(`User with the id ${id} deleted`);
});


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
