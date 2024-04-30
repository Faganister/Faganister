//Отвечают за поставку данных
class UserServices{
    #users = []
    getUsers (){
        return this.#users
    }
    addUser (userData){
        this.#users.push({...userData})

    }
    getUserByID(id){
       
        return this.#users.find(item => item.id == id)
    }
    deleteUser(id){
        const deletedUserIndex = this.#users.findIndex(item => item.id == id )
        if(deletedUserIndex>=0){
            const deletedUser = users.splice(deletedUserIndex,1)
            console.log(deletedUser);
            return deletedUser
            }else{
              console.log("user not exist");
            }
          }
    }



module.exports = new UserServices()