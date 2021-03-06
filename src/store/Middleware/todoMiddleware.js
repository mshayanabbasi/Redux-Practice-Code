import TodoAction from "../Action/todoAction";


class TodoMiddleware{
    static getTodo() {
        return (dispatch) => {

        dispatch(TodoAction.getTodo())
        
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(response => response.json())
        .then(json => {
            console.log(json)
            dispatch(TodoAction.getTodoSuccessfull({
                todos:json
            }))
        })
        .catch((err) => {
            console.log(err)
        })
        }
    }
}

export default TodoMiddleware