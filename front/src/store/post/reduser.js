import { SET_POST_ACTIVE, SET_LIKE_COUNTER,
  SEND_UPDATE_LIKE_COUNTER_REQUEST, UPDATE_LIKE_COUNTER_SUCCESS,
  SET_IS_POST_FAVORITE } from './types';

const initialStatePost = {
  postActiveId: 0,
  postLikeCounter: 0,
  postIsFavorite: false,
  sendRequestForUpdateLikeCounter: false,
}

const reducer = (state = initialStatePost, action) => {
  switch (action.type) {
    case SET_POST_ACTIVE:
      return {...state, postActiveId: action.payload}

    case SET_LIKE_COUNTER:
      return {...state, postLikeCounter: action.payload}

    case SEND_UPDATE_LIKE_COUNTER_REQUEST:
      return {...state, sendRequestForUpdateLikeCounter: true}

    case UPDATE_LIKE_COUNTER_SUCCESS:
      return {...state, sendRequestForUpdateLikeCounter: false}

    case SET_IS_POST_FAVORITE:
      return {...state, postLikeCounter: action.payload}

    default:
      return state;
  }
}

export default reducer;