const todos = [{
    id: 0,
    task: 'We named the dog Indiana',
    complete: false

}]

let id = 1

module.exports = {

    getTodos: (req, res)=> {
        res.status(200).send(todos)
    },

    addTodo: (req, res) => {
        const {task} = req.body       //task - planning on receiving a task from the req.body from the user
        const newTodo = {id, task, complete} //default complete to false, because you'll change to true once it's complete. - this is the data in the array
        todos.push(newTodo)
        id++
        res.status(200).send(todos)    //what do i want this function to do?  //I want my user to enter in a task name, i need to receive that task, make a new todo and put it in my DB.
    },

    completeTodo: (req, res)=> {
     const i = todos.findIndex(todo => todo.id === +req.params.id)   //once i have the index, i can use bracketnotation
     todos[i].complete = !todos[i].complete //look at the todos array and look at the element using the ! will change it different to what is was before.
     res.satus(200).send(todos)
    },

    deleteTodo: (req, res)=> {
        const i = todos.findIndex(todo => todo.id === +req.params.id)   //want to find the index of whatever element has that same id    
        todos.splice(i, 1)
        res.status(200).send(todos)
    }


}