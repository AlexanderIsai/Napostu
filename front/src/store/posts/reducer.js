import {
  LOAD_POSTS_REQUEST, LOAD_POSTS_SUCCESS, SET_POSTS,
  SET_IS_POST_FAVORITE, UPDATE_LIKE_COUNTER, SHOW_HIDE_COMMENTS,
  LOAD_POSTS_FAILURE,
} from './types';

const initialStatePosts = {
  isLoading: true,
  posts: [],
}

const reducer = (state = initialStatePosts, action) => {
  switch (action.type) {
    case LOAD_POSTS_REQUEST:
      return {...state, isLoading: true}


    case LOAD_POSTS_SUCCESS:
      return {...state, isLoading: false}


    case SET_POSTS:
      return {...state, posts: action.payload}


    case SET_IS_POST_FAVORITE:
      const toggleIsPostFavorite = state.posts.map(el => {
        if (el._id === action.payload) {
          el.isPostFavorite = !el.isPostFavorite;
        }
        return el;
      })
      return {...state, posts: toggleIsPostFavorite}


    case UPDATE_LIKE_COUNTER:                          // console.log("postId>> ", action.payload.postId, "userAct>> ", action.payload.userAct);
      const updatePosts = state.posts.map(el => {
        if (el._id === action.payload.postId) {
          ++el.likecounter;
          el.likers.push(action.payload.userAct)
        }
        return el;
      })
      return {...state, posts: updatePosts}


    case SHOW_HIDE_COMMENTS:
      const updatePostsCommentsBtn = state.posts.map(el => {
        if (el._id === action.payload) {
          el.isCommentsShown = !el.isCommentsShown;
        }
        return el;
      })
      return {...state, posts: updatePostsCommentsBtn}


    case LOAD_POSTS_FAILURE:
      return {...state, posts: action.payload}


    default:
      return state;
  }
};

export default reducer;