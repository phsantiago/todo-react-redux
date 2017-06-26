import { ADD_TODO, TOGGLE_TODO } from '../actions'

const initialState = [];

export default function todoApp(state = initialState, action){
    switch(action.type){
        case ADD_TODO:
            return state.concat({
                {
                    id: action.id,
                    text: action.text,
                    done: false
                }
            }); 
        break;
        case TOGGLE_TODO:
            state.index;                    
            return state.map( todo => 
                (todo.id == action.id) ? {...todo, done: !todo.done} : todo
            )
        break;
        default:
            return state    
    }
}
