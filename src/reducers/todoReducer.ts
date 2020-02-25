import { ApiStatus, TodoItem } from "../models";
import { TodoAction } from '../actions/todoActions'

export interface TodoState {
    loadingStatus: ApiStatus;
    addingStatus: ApiStatus;
    todos: TodoItem[];
}
export const initialState: TodoState = {
    loadingStatus: ApiStatus.LOADING,
    addingStatus: ApiStatus.LOADED,
    todos: []
}

export default function todoReducer(state: TodoState = initialState, action: TodoAction) {

}


