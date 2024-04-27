const express = require('express');
const app = express();
const PORT = 3000
app.use(express.json());
// Создать маршрут для обработки HTTP GET-запроса по пути /api/hello, который возвращает простое сообщение "Привет, Redev!".
app.get('/api/hello', (req, res) => {
  console.log("Тебе консольный привет");
  res.send('Привет, Redev');
});

// Создать маршрут для обработки HTTP POST-запроса по пути /api/echo, который принимает JSON-объект с ключом "message" в теле запроса и возвращает этот текст как ответ.

app.post("/api/echo",(req,res)=>{
  res.set('Content-Type', 'application/json')
  res.send(req.body.message)
  
})

const users = []
//Здесь сделал валидацию для избежания повторного создания пользователя с одинаковым Id
app.post("/api/users", (req,res)=>{
  const {id, username, email, password} = req.body
  try{
    let userExists = false;
    for (let i=0;i<users.length;i++){
      if(users[i].id == id ){
        userExists = true;
        break;
      }
    }
    if(userExists){
      res.send("Пользователь с таким id уже существует")
    }else{
      users.push(req.body)
      res.send(`Пользователь с полями  id: ${id} username: ${username} email: ${email} password: ${password} создан`)
    }
  }catch(error){
    console.log(error.name);
  }   
})


//поиск всех юзеров

app.get("/api/users", (req,res)=>{
  res.send(users)
})

//поиск юзера по id

app.get("/api/users/:id", (req,res) => {
  // console.log(req.params)
  res.send(users.find(item => item.id == req.params.id))
})

//изменение данных юзера по id
app.put("/api/users/:id", (req,res) => {
  const {username: newUsername, email: newEmail, password: newPassword} = req.body
  const userIndex = users.findIndex(item => item.id == req.params.id)
  if (userIndex>=0){
  users.splice(users.findIndex(item => item.id == req.params.id),1,{id:req.params.id,password:newPassword,username:newUsername,email:newEmail})
  res.send("User has been changed:")
}else{
  users.push(req.body)
  res.send(`Пользователь с id ${req.params.id} создан`)
}
})

//Изменение пароля конкретного пользователя

app.patch("/api/users/:id", (req,res) => {
const {password: newPassword} = req.body
users[users.findIndex(item => item.id == req.params.id)].password = newPassword
res.send(`New password is ${newPassword}`)
})

//Удаление юзера по id

app.delete("/api/users/:id", (req,res) =>{
  const deletedUserIndex = users.findIndex(item => item.id == req.params.id);
  if(deletedUserIndex>=0){
  const deletedUser = users.splice(deletedUserIndex,1)
  console.log(deletedUser);
  res.send(`User by id ${req.params.id} has been deleted`)
  }else{
    res.send("User by this id in not excist")
  }
})

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
})
