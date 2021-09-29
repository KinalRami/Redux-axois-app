import axios from 'axios';
import { IS_LOADING, STOP_LOADING, USER_LIST } from "./types"

export const getUsers = () => {

    return ((dispatch => {
        dispatch({ type: IS_LOADING })
        axios.get('https://reqres.in/api/users?page=2')
            .then(({ data }) => {
                dispatch({ type: STOP_LOADING })
                dispatch({ type: USER_LIST, payload: data?.data.slice(0, 5) })
            })
            .catch(e => {
                dispatch({ type: STOP_LOADING })
                console.log("Get User Error :: ", e)
            })
    }))

}