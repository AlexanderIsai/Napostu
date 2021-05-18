import React, {useRef} from 'react';
import useStyles from './CommentAddStyles';
import {connect} from "react-redux";
import {IAddComment} from "../Icons/Icons";
import {addComment} from "../../store/comments/operations";


const CommentAdd = (props) => {
  const {activePost, userActive} = props;
  const comment = useRef();

  const handleClickAddComment = (e) => {
    if (comment.current.value) {
      let text = comment.current.value;                          // console.log("I add comment: ", text, "to post: ", activePost, "from: ", userActive.email);
      props.addComment(text, activePost, userActive)
    }
    comment.current.value = "";
  }

  const classes = useStyles();
  return (
    <>
      <div className={classes.commentBox}>
        <form noValidate autoComplete="off">
          <textarea ref={comment}
                aria-label="add comment..." placeholder="add comment..."
                autoComplete="off" autoCorrect="off"
                className={classes.commentArea}>
          </textarea>
        </form>
      </div>
      <IAddComment onClick={handleClickAddComment}/>
    </>
  )
};


const mapStateToProps = (state) => {
  return {}
}
const mapDispatchToProps = (dispatch) => {
  return {
    addComment: (text, activePost, userActive) => dispatch(addComment(text, activePost, userActive)),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentAdd);