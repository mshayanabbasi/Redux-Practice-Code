import React from 'react';
import {connect} from "react-redux"

import './App.css';

class App extends React.Component {
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

export default connect(mapStateToProps)(App);
