import * as actionTypes from './actionTypes'


const saveResult = ( res ) => {
	return {
		type: actionTypes.STORE_RESULT,
		result: res
	}
}

const storeResult = (res) => {
	return (dispatch, getState) => {
		setTimeout(() => {
			// const oldCounter = getState().ctr.counter
			// console.log(oldCounter)
			dispatch(saveResult(res))
		}, 2000)
	}
}

const deleteResult = (resElId) => {
	return {
		type: actionTypes.DELETE_RESULT,
		resultElId: resElId
	}
}

export {
	saveResult,
	storeResult,
	deleteResult
}