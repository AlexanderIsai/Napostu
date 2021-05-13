import {SET_POSTS, UPDATE_LIKE_COUNTER} from './types';

export const setPosts = (data) => {
  data.sort((a, b) =>{
    return (new Date(b.date)) - (new Date(a.date))
  });

  data.forEach((el, ind) => {
    let dateString = new Date(el.date).toUTCString()
    el.dateString = dateString;
  });

  return ({type: SET_POSTS, payload: data});
}

export const updateLikeCounter = (data) => {
  return ({type: UPDATE_LIKE_COUNTER, payload: data});
}