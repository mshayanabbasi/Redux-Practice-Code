import React from 'react';
import {connect} from "react-redux"
import store from './basic'
import './App.css';

function UpdateTodo(){
  return {
      type: "ADD_TODO"
  }
}

class App extends React.Component {
  componentDidMount() {
    console.log(this.props);
    this.props.UpdateTodo()
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
    UpdateTodo: (data) => dispatch(UpdateTodo(data))
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(App);
