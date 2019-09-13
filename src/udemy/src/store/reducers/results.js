import * as Types from '../actions/actionTypes'
import { updateObject } from '../utility.js'
const initialState = {
	results: []
}


const results_reducer = (state = initialState, action) => {
	switch (action.type) {
		case Types.STORE_RESULT:
			return updateObject(state, { results: state.results.concat({id: new Date(), value: action.result * 2}) })
		case Types.DELETE_RESULT:
				const updatedArray = state.results.filter(result => result.id !== action.resultElId )
			return updateObject(state, { results: updatedArray })
		default: 
			return state
	}
}

export default results_reducer