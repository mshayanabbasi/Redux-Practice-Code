import {createStore} from "redux"


function Todo(state={}, action) {
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
            break;
    }
    
}

                        //reducer, default store
const store = createStore(Todo, {})

store.dispatch({
    type: "ADD_TODO",
})

export default store
