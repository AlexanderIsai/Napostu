import { SET_AUTHENTICATED }  from '../auth/types'

const initialState = {
    authenticated: false
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {

        case SET_AUTHENTICATED:
            return {...state, authenticated: action.payload}
      
      default:
        return state;
    }
  }
  
  export default reducer;