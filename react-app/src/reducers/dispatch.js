import { ACTION_TYPES } from "../actions/Dispatch"; 
const initialState = {
    list:[]
}


export const dispatch = (state = initialState, action) => {
    
    switch (action.type) {
        case ACTION_TYPES.FETCH_ALL:
            return {
                ...state,
                list: [...action.payload]
            }
        default:
            return state
    }
}