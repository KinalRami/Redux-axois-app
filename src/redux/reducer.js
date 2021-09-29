import { IS_LOADING, STOP_LOADING, USER_LIST } from "./types"


const initialState = {
    isLoading: false,
    userList: []
}


const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case IS_LOADING:
            return {
                ...state,
                isLoading: true
            }

        case STOP_LOADING:
            return {
                ...state,
                isLoading: false
            }

        case USER_LIST:
            {
                console.log("ULIST ", action.payload)
                return {
                    ...state,
                    userList: action.payload
                }
            }
        default:
            return initialState;
    }
}

export default userReducer;