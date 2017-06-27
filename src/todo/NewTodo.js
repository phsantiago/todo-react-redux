import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions'

let input

let NewTodo = ({ dispatch }) => {
    return (
        <div>
            <form onSubmit={ (e)=>{
                        e.preventDefault();
                        dispatch(addTodo(input.value)); 
                        input.value = '';
                    }
                }
            >
                <input
                    ref={node => {
                            input = node
                        }
                    }
                />
            </form>
        </div>
    )

}

export default connect()(NewTodo);
