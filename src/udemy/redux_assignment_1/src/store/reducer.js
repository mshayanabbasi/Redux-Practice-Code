import * as Types from './actions'

const initialState = {
	persons: []
}
const reducer = (state = initialState, action) => {
	switch (action.type) {
		case Types.ADD_PERSON:
			const newPerson = {
				id: Math.random(),
				name: action.personData.name,
				age: action.personData.age
			}
			return {
				...state,
				persons: newPerson
			}
		case Types.REMOVE_PERSON:
			return {
				...state,
				persons: state.persons.filter(person => person.id !== action.personId)
			}
	}
}

export default reducer
