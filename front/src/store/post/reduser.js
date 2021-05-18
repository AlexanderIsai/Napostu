import {SET_POST_ACTIVE, SET_LIKE_COUNTER,
  UPDATE_LIKE_COUNTER_REQUEST, UPDATE_LIKE_COUNTER_REQUEST_SUCCESS,} from './types';

const initialStatePost = {
  postActiveId: 0,
  postLikeCounter: 0,
  updateLikeCounterRequest: false,
}

const reducer = (state = initialStatePost, action) => {
  switch (action.type) {
    case SET_POST_ACTIVE:
      return {...state, postActiveId: action.payload}

    case SET_LIKE_COUNTER:
      return {...state, postLikeCounter: action.payload}

    case UPDATE_LIKE_COUNTER_REQUEST:
      return {...state, updateLikeCounterRequest: true}

    case UPDATE_LIKE_COUNTER_REQUEST_SUCCESS:
      return {...state, updateLikeCounterRequest: false}

    default:
      return state;
  }
}

export default reducer;