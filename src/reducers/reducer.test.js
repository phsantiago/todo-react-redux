import todoApp from './reducer'
import { toggleTodo } from '../actions.js'

test('toggle a todo done boolean', () => {
    let before = [{text: 'before', done: false, id:1}];
    let result = todoApp(before, toggleTodo(1));
    let after = [{text: 'before', done: true, id:1}];
    expect(result).toBe(after);
})
