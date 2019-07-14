import {createStore, combineReducers} from "redux"


function Todo(state={
    todo:"TODO_ONE"
}, action) {
    switch (action.type) {
        case "ADD_TODO":
            return {
                ...state,
                text: 'TODO_ADDED'
            }            
        case "DELETE_TODO":
            return {
                ...state,
                text: 'TODO_DELETED'
            }            
        default:
            return state
    }
    
}

function User(state={
    name:"shayan"
}, action) {
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                user: 'USER_ADDED'
            }            
        case "DELETE_USER":
            return {
                ...state,
                user: 'USER_DELETED'
            }            
        default:
            return state
    }
    
}


const rootReducer = combineReducers({
    Todo,
    User
})

                        //reducer, default store
const store = createStore(rootReducer, {})

store.dispatch({
    type: "ADD_USER"
})

console.log(store.getState());


export default store;
