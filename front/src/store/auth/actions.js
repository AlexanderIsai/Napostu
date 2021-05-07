import { SET_USER_ACTIVE } from "./types"

export const setUserActive = (user) => {
    return {type: SET_USER_ACTIVE, payload: user}
}