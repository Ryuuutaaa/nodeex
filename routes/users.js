import express from "express";
import { v4 as uuidv4 } from "uuid";
uuidv4();

const router = express.Router();

let users = [];

// all routes staring the route /users
router.get("/", (req, res) => {
  // console.log(users);

  res.send(users);
});

router.post("/", (req, res) => {
  // console.log("POST ROUTED REACHED")

  const user = req.body;
  const userId = uuidv4();

  const withUserId = { ...user, id: userId };

  users.push(withUserId);

  // res.send(`User with the name ${user.firstname} added to databse`)
  res.send(`data masuk dengan username ${user.firstname}`);
});

// /users/2 => req.params {id : 2}
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
