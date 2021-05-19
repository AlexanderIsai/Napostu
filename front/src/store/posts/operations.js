import {LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, LOAD_POSTS_FAILURE} from './types';
import axios from "axios";
import {setPosts, setPostsIS} from "./actions";


export const getPostsInfiniteScroll = (postsLength, userActiveId, userActiveSubscriptions) => (dispatch) => {
  dispatch({type: LOAD_POSTS_REQUEST})

  axios({
    method: 'post',
    url: '/getnextposts',
    data: `currentPostLength=${postsLength}&userActiveId=${userActiveId}&subscriptions=${userActiveSubscriptions}`,
  })
    .then(res => {
      dispatch({type: LOAD_POSTS_SUCCESS})
      return res.data
    })
    .then( res => {
      return setStateFieldsToPostDataIS(res);
    })
    .then( res => {
      dispatch(setPostsIS(res));
    })
    .catch(err => {
      console.log(err);
    });
};

const setStateFieldsToPostDataIS = (data) => {
  data.postsToShow.map( el => {
    el.isCommentsShown = false;
    el.isPostFavorite = false;
    return el;
  })
  return data
};




// without InfiniteScroll ____________
const pathPosts = `/postfeed`;

export const getPosts = () => (dispatch, getState) => {
  dispatch({type: LOAD_POSTS_REQUEST})

  axios(`${pathPosts}`)
    .then(res => {
      const data = res.data;
      console.log(data);
      dispatch({type: LOAD_POSTS_SUCCESS})
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
};
