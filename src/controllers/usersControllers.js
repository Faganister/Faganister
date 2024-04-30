const userServices = require("../services/userServices")

class UsersControllers{
getUsers(req,res){
    const usersArray = userServices.getUsers()
    res.send(usersArray)
}
postUser(req,res){
    console.log("body", req.body);
    userServices.addUser(req.body)
    res.send(req.body)
}
getUser(req,res){
    res.send(userServices.getUserByID(req.params.id))
}
patchUser(req,res){
    res.send("userPatched")
}
putUser(req,res){
    res.send("user puted")
}
deleteUser(req,res){
    const deletedUser = userServices.deleteUser(req.params.id)
    console.log("we are here");
    res.send("")
}
}

module.exports = new UsersControllers()