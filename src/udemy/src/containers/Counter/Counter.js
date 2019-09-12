import React, { Component } from 'react';
import { connect } from 'react-redux'
import CounterControl from '../../components/CounterControl/CounterControl';
import CounterOutput from '../../components/CounterOutput/CounterOutput';
import * as Types from '../../store/actions'

class Counter extends Component {
    state = {
        counter: 0
    }

    counterChangedHandler = ( action, value ) => {
        switch ( action ) {
            case 'inc':
                this.setState( ( prevState ) => { return { counter: prevState.counter + 1 } } )
                break;
            case 'dec':
                this.setState( ( prevState ) => { return { counter: prevState.counter - 1 } } )
                break;
            case 'add':
                this.setState( ( prevState ) => { return { counter: prevState.counter + value } } )
                break;
            case 'sub':
                this.setState( ( prevState ) => { return { counter: prevState.counter - value } } )
                break;
        }
    }

    render () {
        return (
            <div>
                <CounterOutput value={this.props.ctr} />
                <CounterControl label="Increment" clicked={this.props.onIncrementCounter} />
                <CounterControl label="Decrement" clicked={this.props.onDecrementCounter}  />
                <CounterControl label="Add 10" clicked={this.props.onAddCounter}  />
                <CounterControl label="Subtract 15" clicked={this.props.onSubtractCounter}  />
                <hr />
                 <button onClick={() => this.props.onStoreResult(this.props.ctr)}>Store Result</button>
                <ul>
                    {this.props.storedResult.map((strResult) => (
                       <li onClick={() => this.props.onDeleteResult(strResult.id)} key={strResult.id}>{strResult.value}</li>     
                    ))}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    return {
        ctr: state.ctr.counter,
        storedResult: state.res.results
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onIncrementCounter: () => dispatch({type: Types.INCREMENT}),
        onDecrementCounter: () => dispatch({type: Types.DECREMENT}),
        onAddCounter: () => dispatch({type: Types.ADD, val: 10}),
        onSubtractCounter: () => dispatch({type: Types.SUBTRACT, val: 15}),
        onStoreResult: (result) => dispatch({type: Types.STORE_RESULT, result: result}),
        onDeleteResult: (id) => dispatch({type: Types.DELETE_RESULT, resultElId: id}) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);