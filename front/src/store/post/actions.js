import {SET_POST_ACTIVE, SET_LIKE_COUNTER} from './types';

export const setPostActive = (data) => {
  return ({type: SET_POST_ACTIVE, payload: data});
}

export const setLikeCounter = (data) => {
  return ({type: SET_LIKE_COUNTER, payload: data});
}