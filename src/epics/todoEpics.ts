import { Epic, combineEpics } from "redux-observable"
import { filter, switchMap, map, startWith, catchError, mergeMap } from 'rxjs/operators'
import { from, of } from 'rxjs'
import { isOfType } from 'typesafe-actions'
import { TodosAction, TodosActionTypes, loadedTodos, loadingTodos, loadingTodosFailed, addedTodo, addingTodoFailed, addingTodo } from '../actions/todoActions'
import { State } from "../reducers"
import axios from 'axios'

const loadTodosEpic: Epic<TodosAction, TodosAction, State> = (action$, state$) => action$
    .pipe(
        filter(isOfType(TodosActionTypes.LOAD_TODOS)),
        switchMap(action =>
            from(axios.get("http://localhost:5000/todos"))
                .pipe(
                    map(response => loadedTodos(response.data.data)),
                    startWith(loadingTodos()),
                    catchError(() => of(loadingTodosFailed()))
                )
        )
    )


const addTodoEpic: Epic<TodosAction, TodosAction, State> = (action$, state$) => action$
    .pipe(
        filter(isOfType(TodosActionTypes.ADD_TODO)),
        mergeMap(action => from(axios.post("http://localhost:5000/todos", action.payload))
            .pipe(
                map(response => addedTodo(response.data.data)),
                startWith(addingTodo()),
                catchError(() => of(addingTodoFailed()))
            )
        )
    )

export default combineEpics(loadTodosEpic, addTodoEpic);