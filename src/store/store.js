import { createStore, applyMiddleware } from "redux"
import rootReducer from './Reducer/rootReducer'
import thunkMiddleware from 'redux-thunk'
import logger from 'redux-logger'
const Store = createStore(rootReducer, {}, applyMiddleware(thunkMiddleware, logger))

export default Store;