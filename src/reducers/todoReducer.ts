import { ApiStatus, TodoItem } from "../models";
import { TodosAction, TodosActionTypes } from '../actions/todoActions'
import produce from 'immer';

export interface TodoState {
    loadingStatus: ApiStatus;
    addingStatus: ApiStatus;
    todos: TodoItem[];
}
export const initialTodoState: TodoState = {
    loadingStatus: ApiStatus.LOADING,
    addingStatus: ApiStatus.LOADED,
    todos: [
        {
            id: 1,
            description: 'asdf'
        }
    ]
}

export default function todoReducer(state: TodoState = initialTodoState, action: TodosAction) {
    return produce(state, draft => {
        switch (action.type) {
            case TodosActionTypes.LOAD_TODOS:
            case TodosActionTypes.LOADING_TODOS:
                draft.loadingStatus = ApiStatus.LOADING;
                break;
            case TodosActionTypes.LOADING_TODOS_FAILED:
                draft.loadingStatus = ApiStatus.FAILED;
                break;
            case TodosActionTypes.LOADED_TODOS:
                draft.loadingStatus = ApiStatus.LOADED;
                draft.todos = action.payload.todos;
                break;
            case TodosActionTypes.ADD_TODO:
            case TodosActionTypes.ADDING_TODOS_FAILED:
                draft.addingStatus = ApiStatus.LOADING;
                break;
            case TodosActionTypes.ADDING_TODOS_FAILED:
                draft.addingStatus = ApiStatus.FAILED;
                break;
            case TodosActionTypes.ADDED_TODOS:
                draft.todos.push(action.payload.todo);
                break;
        }
    })
}


