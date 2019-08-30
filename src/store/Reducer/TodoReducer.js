import TodoAction from "../Action/todoAction";

function TodoReducer(state={
    isLoading: false,
    isError: false,
    todos: [],
    errorMessage: "",
    sucessMessage: ""
}, action) {
    switch (action.type) {
        case TodoAction.GET_TODO:
            return {
                ...state,
                isLoading: true
            }            
        case TodoAction.GET_TODO_SUCCESSFULL:
            return {
                ...state,
                isLoading: false,
                todos: action.data,
                isError: false
            }            
        case TodoAction.GET_TODO_FAILED:
            return {
                ...state,
                isLoading:false,    
                isError: true
            }
        default:
            return state
    }
    
}

export default TodoReducer

