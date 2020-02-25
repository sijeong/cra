import { TodoItem } from '../models'

export interface LoadTodosAction {
    type: TodosActionTypes.LOAD_TODOS;
}

export interface LoadingTodosAction {
    type: TodosActionTypes.LOADING_TODOS;
}

export interface LoadedTodosAction {
    type: TodosActionTypes.LOADED_TODOS;
    payload: {
        todos: TodoItem[];
    }
}
export interface LoadingTodosFailedAction {
    type: TodosActionTypes.LOADING_TODOS_FAILED;
}

export interface AddTodoAction {
    type: TodosActionTypes.ADD_TODO;
    payload: {
        description: string;
    }
}

export interface AddingTodoAction {
    type: TodosActionTypes.ADDING_TODO;
}

export interface AddedTodoAction {
    type: TodosActionTypes.ADDED_TODOS;
    payload: {
        todo: TodoItem;
    }
}

export interface AddingTodoFailedAction {
    type: TodosActionTypes.ADDING_TODOS_FAILED
}
export type TodosAction =
    LoadTodosAction
    | LoadingTodosAction
    | LoadedTodosAction
    | LoadingTodosFailedAction
    | AddTodoAction
    | AddingTodoAction
    | AddedTodoAction
    | AddingTodoFailedAction


export enum TodosActionTypes {
    LOAD_TODOS = 'todos/load',
    LOADING_TODOS = 'todos/loading',
    LOADED_TODOS = 'todos/loaded',
    LOADING_TODOS_FAILED = 'todos/loading_failed',

    ADD_TODO = 'todo/add',
    ADDING_TODO = 'todo/adding',
    ADDED_TODOS = 'todos/added',
    ADDING_TODOS_FAILED = 'todos/adding_failed'
}

export function loadTodos(): LoadTodosAction {
    return {
        type: TodosActionTypes.LOAD_TODOS
    }
}

export function loadingTodos(): LoadingTodosAction {
    return {
        type: TodosActionTypes.LOADING_TODOS
    }
}

export function loadedTodos(todos: TodoItem[]): LoadedTodosAction {
    return {
        type: TodosActionTypes.LOADED_TODOS,
        payload: {
            todos
        }
    }
}

export function loadingTodosFailed(): LoadingTodosFailedAction {
    return {
        type: TodosActionTypes.LOADING_TODOS_FAILED
    }
}

export function addTodo(description: string): AddTodoAction {
    return {
        type: TodosActionTypes.ADD_TODO,
        payload: {
            description
        }
    }
}

export function addingTodo(): AddingTodoAction {
    return {
        type: TodosActionTypes.ADDING_TODO
    }
}

export function addedTodo(todo: TodoItem): AddedTodoAction {
    return {
        type: TodosActionTypes.ADDED_TODOS,
        payload: {
            todo
        }
    }
}

export function addingTodoFailed(): AddingTodoFailedAction {
    return {
        type: TodosActionTypes.ADDING_TODOS_FAILED
    }
}