const express = require("express")

const router = express.Router() 

const userControllers = require("../controllers/usersControllers")
router.get("/",userControllers.userLogger, userControllers.getUsers)

router.get("/:id",userControllers.userLogger, userControllers.getUser)

router.post("/",userControllers.userLogger, userControllers.postUser)

router.put("/:id",userControllers.userLogger, userControllers.putUser)

router.patch("/:id",userControllers.userLogger, userControllers.patchUser)

router.delete("/:id",userControllers.userLogger, userControllers.deleteUser)

module.exports = router
