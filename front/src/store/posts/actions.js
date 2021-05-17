import {SET_POSTS, SET_IS_POST_FAVORITE, UPDATE_LIKE_COUNTER, SHOW_HIDE_COMMENTS} from './types';


export const setPosts = (data) => {
  data.sort((a, b) =>{
    return (new Date(b.date)) - (new Date(a.date))
  });

  data.forEach((el, ind) => {
    let dateString = new Date(el.date).toUTCString()
    el.dateString = dateString;
  });

  return ({type: SET_POSTS, payload: data});
};


export const setIsPostFavorite = (data) => {
  return ({type: SET_IS_POST_FAVORITE, payload: data});
}


export const updateLikeCounter = (postId, userAct) => {
  return ({type: UPDATE_LIKE_COUNTER, payload: {"postId": postId, "userAct": userAct} });
};


export const showHideComments = (data) => {
  return ({type: SHOW_HIDE_COMMENTS, payload: data});
}