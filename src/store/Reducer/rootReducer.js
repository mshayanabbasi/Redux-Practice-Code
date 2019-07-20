import {combineReducers} from "redux"
import TodoReducer from './TodoReducer'
import User from './UserReducer'
const rootReducers = combineReducers({
    TodoReducer
})
export default rootReducers