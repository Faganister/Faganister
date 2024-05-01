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
    changeOrCreateUser(id,data){
        const changeUserIndex = this.#users.findIndex(item => item.id == id )
        if (changeUserIndex>=0){
            const deletedUserArray = this.#users.splice(changeUserIndex,1,{...data, id:id})
            return true
        }else{
            this.#users.push({...data, id:id})
            return false
        }
    }
    changePassword(id,password){
        const indexOfUSer = this.#users.findIndex(item => item.id == id)
        console.log("user for change is", this.#users[indexOfUSer] )
        this.#users[indexOfUSer].password = password
    }
    deleteUser(id){
        const deletedUserIndex = this.#users.findIndex(item => item.id == id )
        if(deletedUserIndex>=0){
            const deletedUserArray = this.#users.splice(deletedUserIndex,1)
            
            return deletedUserArray[0]
            }else{
              return false
            }
          }
    }



module.exports = new UserServices()