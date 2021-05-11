import {LOAD_USERS_REQUEST, LOAD_USERS_SUCCESS, SET_USERS, LOAD_USERS_FAILURE} from './types';

const initialState = {
  isLoading: true,
  users: []
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case LOAD_USERS_REQUEST:
      return {...state, isLoading: true}

    case LOAD_USERS_SUCCESS:
      return {...state, isLoading: false}

    case SET_USERS:
      return {...state, users: action.payload}

    case LOAD_USERS_FAILURE:
      return {...state, users: action.payload}

    default:
      return state;
  }
}

export default reducer;