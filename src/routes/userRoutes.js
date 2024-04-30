const express = require("express")

const router = express.Router() 

const userControllers = require("../controllers/usersControllers")
router.get("/", userControllers.getUsers)

router.get("/:id", userControllers.getUser)

router.post("/", userControllers.postUser)

router.put("/", userControllers.putUser)

router.delete("/:id", userControllers.deleteUser)

module.exports = router
