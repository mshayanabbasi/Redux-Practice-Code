import {createStore} from "redux"


function Todo(state={
    name:"shayan"
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

                        //reducer, default store
const store = createStore(Todo, {})

store.dispatch({
    type: "ADD_TODO",
})

console.log(store.getState());


export default store
