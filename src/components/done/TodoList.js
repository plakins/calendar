import React from 'react';

export default class TodoList extends React.Component {
    renderList = () => {
        return this.props.list.map((item) => {
            return (
                <li key={item.index}>
                    <span>{item.text}</span>
                    <button onClick={() => this.props.deleteTodo(item.index)}>X</button>
                </li>
            )
        })
    }

	render() {
		return (
			<ul>
                {this.renderList()}
            </ul>
		)
	}
}