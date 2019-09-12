const INCREMENT = "INCREMENT"
const DECREMENT = "DECREMENT"
const ADD = "ADD"
const SUBTRACT = "SUBTRACT"
const STORE_RESULT = "STORE_RESULT"
const DELETE_RESULT = "DELETE_RESULT"

const increment = () => {
	return {
		type: INCREMENT
	}
}

const decrement = () => {
	return {
		type: DECREMENT
	}
}

const add = (value) => {
	return {
		type: ADD,
		val: value
	}
}

const subtract = (value) => {
	return {
		type: SUBTRACT,
		val: value
	}
}

const storeResult = (res) => {
	return {
		type: STORE_RESULT,
		result: res
	}
}

const deleteResult = (resElId) => {
	return {
		type: DELETE_RESULT,
		resultElId: resElId
	}
}

export {
	INCREMENT,
	DECREMENT,
	ADD,
	SUBTRACT,
	STORE_RESULT,
	DELETE_RESULT,
	increment,
	decrement,
	add,
	subtract,
	storeResult,
	deleteResult
}