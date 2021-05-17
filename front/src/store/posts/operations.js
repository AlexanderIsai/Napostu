import {LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE} from './types';
import axios from "axios";
import {setPosts} from "./actions";


const pathPosts = `/postfeed`;

export const getPosts = () => (dispatch, getState) => {
  dispatch({type: LOAD_POSTS_REQUEST})

  axios(`${pathPosts}`)
    .then(res => {
      const data = res.data;
      dispatch({type: LOAD_POSTS_SUCCESS, payload: data})
      return data;
    })
    .then(res => {
      const newData = setStateFieldsToPostData(res);
      dispatch(setPosts(newData));
    })
    .catch(error => {
      dispatch({type: LOAD_POSTS_FAILURE, payload: error})
    })

};

const setStateFieldsToPostData = (data) => {
  return data.map( el => {
    el.isCommentsShown = false;
    el.isPostFavorite = false;
    return el;
  })
}