import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import NewTodo from '../todo/NewTodo'

const mapStateToProps = state => {
    return { done: state.done, text: state.text }
}
const mapDispatchToProps = dispatch => {
    return {
        OnClick: id => {
            dispatch(toggleTodo(id))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewTodo)
