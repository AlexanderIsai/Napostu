import { SET_AUTHENTICATED } from "./types"

export const setAuthenticated = (data) => {
    return {type: SET_AUTHENTICATED, payload: data}
}