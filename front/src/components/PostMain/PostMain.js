import React, {useEffect} from 'react';
import useStyles from './PostMainStyles';
import {connect, useSelector} from "react-redux";

import UserAvatar from "../Avatar/Avatar";
import Comment from "../Comment/Comment";
import { IAddComment, ILikePost, IFavoritePost } from "../Icons/Icons";
import {updateLikeCounter} from "../../store/posts/actions";


const PostMain = (props) => {
  const {users, posts, user, post} = props;

  let userActive = users.find(obj => obj._id === user);
  let postActive = post._id;

  const handleClick1 = (e) => {
    console.log("I open area for comment for this post");
  }


  const handleClickLikesCounter = (e) => {
    console.log("I like this post");    // console.log("postActive >> post._id: ", postActive);
    props.updateLikeCount(postActive);
  }

  const handleClick3 = (e) => {
    console.log("I add to favorite this post");
  }

  const classes = useStyles();
  return (
    <div className={classes.root}>

      <div className={classes.postMainHeader}>
        <div className={classes.postMainHeaderContent}>

          {/*{(userActive) &&*/}
          <div className={classes.postMainHeaderItem}>
            <UserAvatar
              size="small"
              user={userActive}
              textLink={true}
              borderAround={true}
            />
          </div>
          {/*}*/}

          <div className={classes.postMainHeaderItem}>
            <div className={classes.headerDescriptionItem}>
              Description: {post.post_description}
            </div>
          </div>

        </div>
      </div>


      <div className={classes.postMainBody}>
        <div className={classes.postMainBodyContent}>

          <div className={classes.postMainBodyItem}>
            Photo src: {post.imageUrl}
          </div>

        </div>
      </div>


      <div className={classes.postMainFooter}>
        <div className={classes.postMainFooterContent}>

          <div className={classes.postMainFooterItem}>
            <div className={classes.footerLineItem}/>
          </div>

          <div className={classes.postMainFooterItem}>
            <div className={classes.footerIconsItem}>

              <ILikePost onClick={ handleClickLikesCounter } />
              <span className={classes.likeCounter}>
                {post.like_counter}
              </span>

              <IFavoritePost onClick={handleClick3} />

              <IAddComment onClick={handleClick1} style={{}}/>
            </div>
          </div>

          <div className={classes.postMainFooterItem}>
            <div className={classes.footerCommentsItem}>
              <Comment />
            </div>
          </div>

        </div>
      </div>


    </div>
  );
}


const mapStateToProps = (state) => {
  return {
    isLoading: state.users.isLoading,
    users: state.users.users,
    posts: state.posts.posts,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updateLikeCount: (data) => dispatch(updateLikeCounter(data)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostMain);