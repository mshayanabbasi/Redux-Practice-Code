import * as Types from '../actions'

const initialState = {
	results: []
}

const results_reducer = (state = initialState, action) => {
	switch (action.type) {
		case Types.STORE_RESULT:
			return {
				...state,
				results: state.results.concat({id: new Date(), value: action.result})
			}
		case Types.DELETE_RESULT:
				const updatedArray = state.results.filter(result => result.id !== action.resultElId )
			return {
				...state,
				results: updatedArray
			}
		default: 
			return state
	}
}

export default results_reducer