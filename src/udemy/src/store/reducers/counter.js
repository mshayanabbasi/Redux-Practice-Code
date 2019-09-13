import * as Types from '../actions/actionTypes'
import { updateObject } from '../utility.js'
const initialState = {
	counter: 0,
}

const counter_reducer = (state = initialState, action) => {
	switch (action.type) {
		case Types.INCREMENT:
			return updateObject(state, { counter: state.counter + 1 })
		case Types.DECREMENT:
			return updateObject(state, { counter: state.counter - 1 })
		case Types.ADD:
			return updateObject(state, { counter: state.counter + action.val })
		case Types.SUBTRACT:
			return updateObject(state, { counter: state.counter - action.val })
		default: 
			return state
	}
		
}

export default counter_reducer