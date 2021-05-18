import React from 'react';
import useStyles from './PostMainStyles';
import {connect} from "react-redux";

import UserAvatar from "../UserAvatar/UserAvatar";
import CommentMain from "../CommentMain/CommentMain";
import CommentAdd from "../CommentAdd/CommentAdd";
import {ILikePost, IFavoritePost} from "../Icons/Icons";
import ButtonTxt from "../ButtonTxt/ButtonTxt";

import {setIsPostFavorite, updateLikeCounter, showHideComments} from "../../store/posts/actions";
import {setLikeCounter, setPostActive} from "../../store/post/actions";
import {updateLikeCounterBD} from "../../store/post/operations";


const PostMain = (props) => {
  const {post, users, creator, comments, userActive} = props;

  let postCreator = users.find(obj => obj._id === creator);

  const postComments = [];
  post.comments.forEach(el => {
    postComments.push(comments.find(comment => comment._id === el));
  });
  postComments.sort((a, b) => {
    return (new Date(b.date)) - (new Date(a.date))
  });


  const handleClickAddFavorite = (id) => {

    props.setPostActive(id);

    props.setIsPostFavorite(id);

    props.setPostActive(0);
  }

  const handleClickLikesCounter = (e) => {

    props.updateLikeCounter(post._id, userActive._id);         // console.log("afterUpdate >> post.like_counter: ", post.likecounter);

    props.updateLikeCounterBD(post._id, userActive._id);

    props.setLikeCounter(post.likecounter);
  }

  const toggleShowHideComments = (id) => {
    props.setPostActive(id);

    props.showHideComments(id);

    props.setPostActive(0);                     // console.log("postActiveID >>> ", post._id, "postComments[] >>> ", postComments);
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
              post description: {post.post_description}
            </div>
          </div>
        </div>
      </div>


      <div className={classes.postMainBody} onDoubleClick={handleClickLikesCounter}>
        <div className={classes.postMainBodyItem}>
          <img alt="post img" className={classes.bodyImage} id={`${post._id}`} src={post.imageUrl}/>
        </div>
      </div>


      <div className={classes.postMainFooter}>
        <div className={classes.footerIcons}>
          <IFavoritePost onClick={() => handleClickAddFavorite(post._id)} isFavorite={post.isPostFavorite}/>

          <ILikePost onClick={handleClickLikesCounter}/>

          <span className={classes.likeCounter}>{post.likecounter}
            <span className={classes.likeCounterAfter}>likes for post {post._id}</span>
          </span>
        </div>

        <div className={classes.footerComments}>
          {(postComments.length === 1) &&
          <CommentMain
            creator={users.find(obj => obj._id === postComments[0].creator).email}
            commentTxt={postComments[0].text}/>
          }

          {(postComments.length > 1) &&
          <>
            <ButtonTxt
              onClick={() => toggleShowHideComments(post._id)}
              text={post.isCommentsShown ? 'hide' : 'show'}
              tooltip={true}
              tooltipTitle="comments"
              tooltipPlacement="right"/>

            {(!post.isCommentsShown) &&
            <CommentMain
              creator={users.find(obj => obj._id === postComments[0].creator).email}
              commentTxt={postComments[0].text}/>
            }

            {(post.isCommentsShown) &&
            postComments.map((el, id) => {
              return (
                <CommentMain key={id}
                             creator={users.find(obj => obj._id === el.creator).email}
                             commentTxt={el.text}/>
              )
            })
            }
          </>
          }
        </div>

        <div className={classes.footerAddComments}>
          <CommentAdd
            activePost={post._id}
            userActive={userActive._id}/>
        </div>
      </div>


    </div>
  );
};


const mapStateToProps = (state) => {
  return {
    postActiveId: state.post.postActiveId,
    postLikeCounter: state.post.postLikeCounter,

    users: state.users.users,
    userActive: state.auth.userActive,
    comments: state.comments.comments,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    setIsPostFavorite: (data) => dispatch(setIsPostFavorite(data)),

    setPostActive: (data) => dispatch(setPostActive(data)),
    setLikeCounter: (data) => dispatch(setLikeCounter(data)),

    updateLikeCounter: (postId, userAct) => dispatch(updateLikeCounter(postId, userAct)),
    updateLikeCounterBD: (postId, userAct) => dispatch(updateLikeCounterBD(postId, userAct)),

    showHideComments: (data) => dispatch(showHideComments(data)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostMain);