import {SET_USER_ACTIVE, UPDATE_SUBSCRIPTIONS_ACTIVE_USER} from "./types";
import {UPDATE_SUBSCRIPTIONS} from "../users/types";

const initialState = {
    userActive: null
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_ACTIVE:
            return {...state, userActive: action.payload}

        case UPDATE_SUBSCRIPTIONS_ACTIVE_USER:
            const updateSubscriptionsUserActive = state.userActive

                    if (!updateSubscriptionsUserActive.subscriptions.includes(action.payload)){
                        updateSubscriptionsUserActive.subscriptions.push(action.payload)
                    }
                    else {
                        let indexToDel = updateSubscriptionsUserActive.subscriptions.indexOf(action.payload)
                        updateSubscriptionsUserActive.subscriptions.splice(indexToDel, 1)
                    }

            return {...state, userActive: updateSubscriptionsUserActive}
      
      default:
        return state;
    }
  }
  
  export default reducer;