function User(state={
    name:"shayan"
}, action) {
    switch (action.type) {
        case "ADD_USER":
            return {
                ...state,
                user: 'USER_ADDED'
            }            
        case "DELETE_USER":
            return {
                ...state,
                user: 'USER_DELETED'
            }            
        default:
            return state
    }
    
}

export default User