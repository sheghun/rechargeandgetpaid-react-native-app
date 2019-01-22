import { LOGIN_ACTION } from "../Actions/Actions";
import { combineReducers } from 'redux'

const initialState = {
    isLoading: false,
}

export const reducer = (state = initialState, action) => {
    switch (action) {
        case LOGIN_ACTION:
            alert(state.isLoading)
            return {
                ...state
            }
            break;
    
        default:
            return {
                ...state
            }
            break;
    }
}

const Reducer = combineReducers({
    reducer
})

export default Reducer;