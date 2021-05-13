import { SET_POST_ACTIVE, SET_LIKE_COUNTER, SEND_UPDATE_LIKE_COUNTER_REQUEST, SET_IS_POST_FAVORITE } from './types';

export const setPostActive = (data) => {
  return ({type: SET_POST_ACTIVE, payload: data});
}

export const setLikeCounter = (data) => {
  return ({type: SET_LIKE_COUNTER, payload: data});
}

export const sendRequestForUpdateLikeCounter = () => {
  return ({type: SEND_UPDATE_LIKE_COUNTER_REQUEST});
}

export const setIsPostFavorite = (data) => {
  return ({type: SET_IS_POST_FAVORITE, payload: data});
}