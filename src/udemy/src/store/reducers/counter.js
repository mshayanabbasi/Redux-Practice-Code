import * as Types from '../actions/actions'
const initialState = {
	counter: 0,
}

const counter_reducer = (state = initialState, action) => {
	switch (action.type) {
		case Types.INCREMENT:
			const newState = Object.assign({}, state)
			newState.counter = state.counter + 1
			return newState
		case Types.DECREMENT:
			return {
			...state,
			counter: state.counter - 1
		}
		case Types.ADD:
			return {
			...state,
			counter: state.counter + action.val
		}
		case Types.SUBTRACT:
			return {
			...state,
			counter: state.counter - action.val
		}
		default: 
			return state
	}
		
}

export default counter_reducer