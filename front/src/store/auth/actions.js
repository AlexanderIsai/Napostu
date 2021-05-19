import {SET_USER_ACTIVE, UPDATE_SUBSCRIPTIONS_ACTIVE_USER} from "./types"

export const setUserActive = (user) => {
    return {type: SET_USER_ACTIVE, payload: user}
}

export const updateSubscriptionsUserActive = (ownerId) => {
    return ({type: UPDATE_SUBSCRIPTIONS_ACTIVE_USER, payload: ownerId});
}


