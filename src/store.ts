import { createStore, applyMiddleware } from 'redux'
// import { initialState } from './reducers/todoReducer';
import rootReducer, {initialState} from './reducers'
import { composeWithDevTools } from 'redux-devtools-extension'
import epicMiddleware, {rootEpic} from './epics'

const composeEnhancer = composeWithDevTools({
    name: 'React Clean Architecture'
})

const store = createStore(
    rootReducer,
    initialState,
    composeEnhancer(applyMiddleware())
)

epicMiddleware.run(rootEpic);

export default store;