import React from 'react';
import {connect} from "react-redux"
import store from './basic'
import './App.css';
import TodoAction from './store/Action/todoAction';

// function UpdateTodo(){
//   return {
//       type: "ADD_TODO"
//   }                                    
// }

class App extends React.Component {
  componentDidMount() {
    // console.log(this.props);
    // this.props.UpdateTodo({name: "Shayan", password:"123"})
    this.props.getTodo()
  }
  componentWillReceiveProps(nextProps) {
    console.log("componentWillReceiveProps", nextProps);
    
  }
  render() {
    return (
      <div className="App">
          Hello World
      </div>
    )
  }
}

function mapStateToProps(state) {
  return ({
    Todo: state.Todo.text
  })

}

function mapDispatchToProps(dispatch) {
  return {
    // updateTodo: (data) => dispatch(UpdateTodo(data))
    getTodo: (data) => dispatch(TodoAction.getTodo(data))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);


// export default App