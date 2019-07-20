import React from 'react';
import {connect} from "react-redux"
import store from './store/store'
import './App.css';
import TodoAction from './store/Action/todoAction';
import TodoMiddleware from './store/Middleware/todoMiddleware';
import { stat } from 'fs';

// function UpdateTodo(){
//   return {
//       type: "ADD_TODO"
//   }                                    
// }

class App extends React.Component {
  state = {
    todos: []
  }
  componentDidMount() {
    // console.log(this.props);
    // console.log(store.getState());
    
    // this.props.UpdateTodo({name: "Shayan", password:"123
      this.props.getTodo()
      // console.log(store.getState());
      
  }
  componentWillReceiveProps(nextProps) {
    // console.log("componentWillReceiveProps", nextProps);
    this.setState({
      todos: nextProps.todos
    })
    
  }
  render() {
    const { todos } = this.state
    return (
      <div className="App">
          Hello World
          <ul>
            {todos.length && todos.map((todo, index) => {
             return    <li className="todo" key={index}>{todo.title}<br /><br /></li>
            })}
          </ul>
      </div>                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                
    )
  }
}

function mapStateToProps(state) {
  return ({
    isLoading: state.TodoReducer.isLoading,
    isError: state.TodoReducer.isError,
    todos: state.TodoReducer.todos
  })

}

function mapDispatchToProps(dispatch) {
  return {
    // updateTodo: (data) => dispatch(UpdateTodo(data))
    getTodo: (data) => dispatch(TodoMiddleware.getTodo())
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);


// export default App
// component ---> action ---> reducer ---> store ---> component