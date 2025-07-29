import express from "express"; 

const router = express.Router();

// all routes staring the route /users
router.get("/", (req, res) => {
    res.send("hello")
})

export default router;