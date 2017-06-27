import React from 'react';
import Todo from './Todo'
import { connect } from 'react-redux'
const TodoList = ({ todos, onTodoClick }) => {
    return (
        <ul>
            { todos.map( todo => (
                <Todo {...todo} onClick={ () => onTodoClick(todo.id) } />
                )
            )}
        </ul>
    )

}

export default connect()(TodoList);
