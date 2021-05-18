import React from 'react';
import useStyles from './CommentMainStyles';
import {connect} from "react-redux";


const CommentMain = (props) => {
  const {creator, commentTxt} = props;

  const classes = useStyles();
  return (
    <>
      <div className={classes.commentItem}>
        <span>{creator} comment:</span>
        <span className={classes.commentTxt}>{commentTxt}</span>
      </div>
    </>
  )
};


const mapStateToProps = (state) => {
  return {}
}
const mapDispatchToProps = (dispatch) => {
  return {
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CommentMain);