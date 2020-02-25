import { combineReducers } from 'redux'

import todoReducer, { TodoState, initialTodoState } from './todoReducer'

export interface State{
    todos: TodoState
}

export const initialState: State = {
    todos: initialTodoState
}
export default combineReducers({
    todos: todoReducer
})