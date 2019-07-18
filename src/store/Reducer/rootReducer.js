import {combineReducers} from "redux"
import Todo from './TodoReducer'
import User from './UserReducer'
const rootReducers = combineReducers({
    Todo,
    User
})
export default rootReducers