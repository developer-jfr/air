import { MAP_VARIABLES } from "../variables"

const initialState = {
 searchMap: []
}

 const mapReducer = (state = initialState, action) => {
    switch(action.type) {
        case MAP_VARIABLES.GET_AIRPORT: {
            return {
                ...state,
                searchMap: action.payload
            }
        }
        default: return state
    }
}

export default mapReducer