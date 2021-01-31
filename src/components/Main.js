import React, {Component} from 'react'
import axios from 'axios'
import Todo from './Todo'
import Form from './Form'


class Main extends Component {
constructor(){
super()
this.state = {
    todos: []
}

}

componentDidMount(){
    this.getTodos()
}

getTodos=()=>{
axios.get('/api/todos') //because of the proxy, i don't have to write the http://....
.then(res => {
    this.setState({
        todos: res.data
    })
}).catch(err => console.log(err))


} //this is going to invoke axios


addTodo = task => {
    axios.post('/api/todos', {task})
    .then(res => {
        this.setState({
            todos: res.data
        })
    }).catch (err => console.log(err))
}

render(){

    const mappedTodos = this.state.todos.map(todo => {
        return <Todo key={todo.id} todo={todo}/>
    })

    return(
        <div className="main">
            This is the main component
            <Form addTodo={this.addTodo} />
            {mappedTodos}
            
        </div>

    )
}



}

export default Main