import {LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE} from './types';
import axios from "axios";
import {setPosts} from "./actions";

const pathPosts = `/postfeed`;

export const getPosts = () => (dispatch, getState) => {
  dispatch({type: LOAD_POSTS_REQUEST})

  axios(`${pathPosts}`)
    .then(res => {
      const data = res.data;     // console.log("LOAD_POSTS_SUCCESS: ", data);
      dispatch({type: LOAD_POSTS_SUCCESS, payload: data})
      return data;
    })
    .then(res => {
      dispatch(setPosts(res));
      return res;
    })
    .catch(error => {
      dispatch({type: LOAD_POSTS_FAILURE, payload: error})
    })

}