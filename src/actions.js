export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'

let newId = 0;

export function toggleTodo(index){
    return {type: TOGGLE_TODO, id: index }
}

export function addTodo(text){
    newId++;
    return {type: ADD_TODO, text: text, id:newId }
}
