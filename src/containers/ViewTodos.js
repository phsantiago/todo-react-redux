import React from 'react'
import { connect } from 'react-redux'
import TodoList from '../todo/TodoList'
import { toggleTodo } from '../actions'

const mapStateToProps = state => {
    return {
        todos: state
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onTodoClick: id => {
            dispatch(toggleTodo(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
