import express from "express"; 
import { v4 as uuidv4 } from "uuid";
uuidv4();

const router = express.Router();

const users = []; 

// all routes staring the route /users
router.get("/", (req, res) => {

    // console.log(users);

    res.send(users)
})

router.post("/", (req, res) => {
    // console.log("POST ROUTED REACHED")

    const user =  req.body;
    const userId = uuidv4();

    const withUserId = {...user, id: userId}

    users.push(withUserId);

    // res.send(`User with the name ${user.firstname} added to databse`)
    res.send(`data masuk dengan username ${user.firstname}`)
})


// /users/2 => req.params {id : 2}
router.get("/:id", (req, res) => {
    const {id} = req.params; 

    const findUser = users.find((user) => user.id === id)

    res.send(findUser);
})

export default router;