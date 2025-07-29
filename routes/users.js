import express from "express"; 

const router = express.Router();

const users = [
  {
    "firstname" : "budi",
    "lastname" : "santoso",
    "age" : 23
}
]

// all routes staring the route /users
router.get("/", (req, res) => {

    // console.log(users);

    res.send(users)
})

router.post("/", (req, res) => {
    // console.log("POST ROUTED REACHED")

    const user =  req.body;
    users.push(user);

    // res.send(`User with the name ${user.firstname} added to databse`)
    res.send(`data masuk dengan username ${user.firstname}`)
})

export default router;