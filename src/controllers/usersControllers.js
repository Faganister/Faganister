const userServices = require("../services/userServices")

class UsersControllers{
userLogger(req,res,next){
    console.log(`Запрос на /api/users${req.url}`);
    next()
}
getUsers(req,res){
    const usersArray = userServices.getUsers()
    res.send(usersArray)
}
postUser(req,res){
    userServices.addUser(req.body)
    res.send(`User ${JSON.stringify(req.body)} has been created`)
}
getUser(req,res){
    res.send(userServices.getUserByID(req.params.id))
}
patchUser(req,res){
    userServices.changePassword(req.params.id, req.body.password)
    res.send(`new password is ${req.body.password}`)
}
putUser(req,res){
    
    if(userServices.changeOrCreateUser(req.params.id, req.body)){
        res.send(`user changed, current information ${JSON.stringify(req.body)}`)
    }else{
        res.send(`User with id ${req.params.id} has been created`)
    }
    userServices.changeOrCreateUser(req.params.id, req.body)
    
}

deleteUser(req,res){
    const deletedUser = userServices.deleteUser(req.params.id)
    if(deletedUser){
        res.send(`user ${JSON.stringify(deletedUser)} has been deleted`) 
    }else{
        res.send(`user by this id is not exist`)
}
}}

module.exports = new UsersControllers()