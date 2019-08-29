
// Library Code
function createStore (reducer) {
    // The store have four points
    // 1. The state
    // 2. Get the state
    // 3. Listen to changes on the state
    // 4. Update the state
    let state;
    let listeners = []
    const subscribe = (listener) => {
        listeners.push(listener)
        return () => {
            listeners = listeners.filter((l) => l !== listener)
        }
    }
    const dispatch = (action) => {
        state = reducer(state, action)
        listeners.forEach((listener) => listener())
    }
    const getState = () => state

    return {
        getState,
        subscribe,
        dispatch
    }
}

// App code

const ADD_TODO = 'ADD_TODO'
const REMOVE_TODO = 'REMOVE_TODO'
const TOGGLE_TODO = 'TOGGLE_TODO'
const ADD_GOALS = 'ADD_GOALS'
const REMOVE_GOALS = 'REMOVE_GOALS'

function addTodoAction (todo) {
    return {
        type: ADD_TODO,
        todo
    }
}
function removeTodoAction (id) {
    return {
        type: REMOVE_TODO,
        id
    }
}

function toggleTodoAction (id) {
    return {
        type: TOGGLE_TODO,
        id
    }
}

function addGoalAction(goal) {
    return {
        type: ADD_GOALS,
        goal
    }
}

function removeGoalAction(id) {
    return {
        type: REMOVE_GOALS,
        id
    }
}

function todo (state=[], action) {
    switch (action.type) {
        case ADD_TODO:
            return state.concat([action.todo])
        case REMOVE_TODO:
            return state.filter((todo) => todo.id !== action.id)
        case TOGGLE_TODO:
            return state.map((todo) => todo.id !== action.id ? todo : Object.assign({}, todo, {complete: true}))
        default:
            return state            
    }

}

function goals (state = [], action) {
    switch (action.type) {
        case ADD_GOALS:
            return state.concat([action.goals])
        case REMOVE_GOALS:
            return state.filter((goal) => goal.id !== action.id)
        default:
            return state
    }
}

function app(state={}, action) {
    return {
        todo: todo(state.todo,  action),
        goals: goals(state.goals, action)
    }
}

const store = createStore(app)
store.subscribe(() => {
    console.log('The new state is: ', store.getState())
})
store.dispatch(addTodoAction({
    id: 0,
    name: 'Learn Redux',
    complete: false
}))
store.dispatch(addTodoAction({
    id: 1,
    name: 'Learn React',
    complete: false
}))
store.dispatch(addTodoAction({
    id: 2,
    name: 'Learn JS',
    complete: true
}))
store.dispatch(removeTodoAction(1))
store.dispatch(toggleTodoAction(0))
store.dispatch(addGoalAction({
    id: 0,
    name: 'Learn 20 pounds',
}))
store.dispatch(addGoalAction({
    id: 1,
    name: 'Learn 2dsd pu n',
}))
store.dispatch(removeGoalAction(1))