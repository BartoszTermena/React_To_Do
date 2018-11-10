import React, { Component } from 'react'

export default class AddTodo extends Component {
    state = {
        content: ''
    }
    handleChange = (e) => {
        this.setState({
            content: e.target.value,
            no_todo: ''
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            content: ''
        })
        if (this.state.content !== ''){
        this.props.addTodo(this.state)
        } else {
            const no_todo = 'type the text...'
            this.setState({
                no_todo: no_todo
            })
            console.log(no_todo)
        }
    }
  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
            <label>Add new todo: </label>
            <input 
            type="text"
            onChange={this.handleChange}
            value={this.state.content}
            />
            <span className="red-text text-darken-2">{this.state.no_todo}</span>
        </form>

      </div>
    )
  }
}
