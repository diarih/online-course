const express = require("express")
const instructorRouter = express.Router()

const controller = require("../controllers/instructor.controller")

instructorRouter.get("/", controller.getInstructors)

instructorRouter.get("/:id", controller.getInstructor)