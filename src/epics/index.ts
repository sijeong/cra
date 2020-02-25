import { combineEpics, createEpicMiddleware } from "redux-observable";
import todoEpics from "./todoEpics";
import { Action } from "redux";
import { State } from "../reducers";


export const rootEpic = combineEpics(todoEpics);

export default createEpicMiddleware<Action, Action, State>();