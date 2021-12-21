const express = require("express")
const router = express.Router()

const instructor = require("./instructor.router")

router.use("/instructor", instructor)

router.get("/", (req, res) => {
    res.status(200).send("Welcome Page")
})

module.exports = router