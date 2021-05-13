import React, {useEffect} from 'react';
import useStyles from './PostMainStyles';
import {connect} from "react-redux";

import UserAvatar from "../UserAvatar/UserAvatar";
import Comment from "../Comment/Comment";
import {IAddComment, ILikePost, IFavoritePost} from "../Icons/Icons";
import {updateLikeCounter} from "../../store/posts/actions";
import {setIsPostFavorite, setLikeCounter, setPostActive} from "../../store/post/actions";
import {updateLikeCounterBD} from "../../store/post/operations";


const PostMain = (props) => {
  const {post, users, creator, comments} = props;
  let postCreator = users.find(obj => obj._id === creator);

  const postComments = [];
  post.comments.forEach(el => {
    postComments.push(comments.find(comment => comment._id === el));
  });
  // console.log("postActiveID >>> ", post._id,  "postComments[] >>> ", postComments);

  // useEffect(() => {},[]);

  const handleClickAddComment = (e) => {
    console.log("I open area for comment for this post");
  }

  const handleClickLikesCounter = (e) => {
    console.log("I like this post!");
    console.log("postActive >> post._id: ", post._id);

    props.updateLikeCounter(post._id);
    console.log("afterUpdate >> post.like_counter: ", post.likecounter);

    props.updateLikeCounterBD(post._id);

    props.setPostActive(post._id);
    props.setLikeCounter(post.likecounter);
  }

  const handleClickAddFavorite = (e) => {
    console.log("I add to favorite this post");
  }



  const classes = useStyles();
  return (
    <div className={classes.root}>

      <div className={classes.postMainHeader}>
        <div className={classes.postMainHeaderContent}>
          <div className={classes.postMainHeaderItem}>
            <UserAvatar
              size="small"
              user={postCreator}
              textLink={true}
              borderAround={true}
            />
          </div>

          <div className={classes.postMainHeaderItem}>
            <div className={classes.headerDescription}>
              Description: {post.post_description}
            </div>
          </div>
        </div>
      </div>


      <div className={classes.postMainBody}>
        <div className={classes.postMainBodyItem}>
          <img className={classes.bodyImage} id={`${post._id}`} src={post.imageUrl}/>
        </div>
      </div>


      <div className={classes.postMainFooter}>
        <div className={classes.postMainFooterContent}>
          <div className={classes.postMainFooterItem}>
            <div className={classes.footerIcons}>
              <IAddComment onClick={handleClickAddComment} style={{}} />
              <IFavoritePost onClick={handleClickAddFavorite} />
              <ILikePost onClick={handleClickLikesCounter} />
              <span className={classes.likeCounter}>
                {post.likecounter} likes
              </span>
            </div>
          </div>

          <div className={classes.postMainFooterItem}>

          </div>

          <div className={classes.postMainFooterItem}>
            <div className={classes.footerComments}>
              <Comment/>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    users: state.users.users,
    userActive: state.auth.userActive,

    postActiveId: state.post.postActiveId,
    postLikeCounter: state.post.postLikeCounter,
    postIsFavorite: state.post.postLikeCounter,

    comments: state.comments.comments,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    updateLikeCounter: (data) => dispatch(updateLikeCounter(data)),
    updateLikeCounterBD: (data) => dispatch(updateLikeCounterBD(data)),

    setPostActive: (data) => dispatch(setPostActive(data)),
    setLikeCounter: (data) => dispatch(setLikeCounter(data)),

    // setIsPostFavorite: (data) => dispatch(setIsPostFavorite(data)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostMain);