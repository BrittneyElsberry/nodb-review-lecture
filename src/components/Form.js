

import express from 'express'
import React, {Component} from 'react'


class Form extends Component {
constructor(){
    super()
    this.state = {
        task: ''
    }
}

handleChange =()=>{
this.setState({
    task: e.target.value
})

}

handleSubmit = e => {
    e.preventDefault()
    this.props.addTodo(this.state.task)
    this.setState({
        task: ''
    })
}

render(){

    return <div className="form-container">
        <form onSubmit={()=> this.handleSubmit(e)}>   
            <input
            onChange={e => this.handleChange(e)}
            value={this.state.task}  placeholder="Type todo here.." type="text"/>
            <button type="submit">Add Todo</button>
            </form>
    </div>
}


}

export default Form