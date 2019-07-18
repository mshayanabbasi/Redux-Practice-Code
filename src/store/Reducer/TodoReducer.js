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

export default Todo

