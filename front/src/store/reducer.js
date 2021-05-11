import {combineReducers} from 'redux';

import usersReducer from './users/reducer';
import postsReducer from './posts/reducer';

import pagesReducer from './pages/reducer'

import commentsReducer from './comments/reducer';
import authReducer from './auth/reducer';

const reducer = combineReducers({

  users: usersReducer,
  posts: postsReducer,
  pages: pagesReducer,
  auth: authReducer,
  comments: commentsReducer
});

export default reducer;