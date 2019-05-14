import React from 'react';
import TodoList from './TodoList';

export default class Todo extends React.Component {
    state = {
        todos : [],
        todoName : '',
        lastIndex : -1
    }

    addTodo = () => {
        if (this.state.todoName === '') {
            return false;
        }
        this.setState((state) => {
            return {
                todos: [...state.todos, {index : state.lastIndex + 1, text : state.todoName}], 
                todoName : '',
                lastIndex : state.lastIndex + 1
            }
        })
    }

    deleteTodo = (index) => {
        this.setState((state) => {
            let todos = [...state.todos];
            let i = 0;
            while (todos[i].index !== index) {
                i++;
            }
            todos.pop(i);
            return {...state, todos}
        })
    }

    changeTodoName = (name) => {
        this.setState((state) => {
            return {...state, todoName : name}
        })
    }

	render() {
		return (
			<div className="container">
                <input value={this.state.todoName} onChange={(e) => {this.changeTodoName(e.target.value)}} />
                <button onClick={() => {this.addTodo()}}>Добавить</button>
                <TodoList list={this.state.todos} deleteTodo={this.deleteTodo} />
            </div>
		)
	}
}