import {SET_USER_ACTIVE} from "./types";

const initialState = {
    userActive: null
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_USER_ACTIVE:
            return {...state, userActive: action.payload}
      
      default:
        return state;
    }
  }
  
  export default reducer;