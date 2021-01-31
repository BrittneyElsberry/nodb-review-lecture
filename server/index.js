const express = require('express')
const ctrl = require('./controller.js')

const app = express()

app.use(express.json())

//EndPoints

app.get('/api/todos', ctrl.getTodos) //interacting with the todos array, can name it based on what it's interacting with
app.post('/api/todos', ctrl.addTodo)
app.put('/api/todos/:id', ctrl.completeTodo)//target a specific data point in the array
app.delete('/api/todos/:id', ctrl.deleteTodo) 


const port = 4000
app.listen(port, ()=> console.log(`Listening on port ${port}`))