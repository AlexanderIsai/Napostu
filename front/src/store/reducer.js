import {combineReducers} from 'redux';

import usersReducer from './users/reducer';
import postsReducer from './posts/reducer';
import commentsReducer from './comments/reducer';
import pagesReducer from './pages/reducer'

const reducer = combineReducers({

  users: usersReducer,
  posts: postsReducer,
  pages: pagesReducer,
  comments: commentsReducer,
});

export default reducer;