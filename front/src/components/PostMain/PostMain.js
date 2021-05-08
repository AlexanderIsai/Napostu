import React, {useEffect} from 'react';
import useStyles from './PostMainStyles';
import {connect, useSelector} from "react-redux";

import UserAvatar from "../Avatar/Avatar";
import Comment from "../Comment/Comment";
import { IAddComment,  IFavoritePost } from "../Icons/Icons";


const PostMain = (props) => {
  const {users} = props;

  // console.log("USERS (from props) on post component: ", users);
  // let usersH = useSelector(state => state.users.users);
  // console.log("usersH on post component: ", usersH);

  let ind, userActive;
  if (!users[0]) {
    console.log("not yet!!!")
  } else {
    console.log("USERS (from props) on post component: ", users);

    ind = users.findIndex(obj => obj._id === 1);
    console.log("userActive ID : ", ind);
    console.log("userActive : ", users[ind]);
    userActive = users[ind];
    console.log("userActive email : ", userActive.email);
  }

  const handleClick1 = (e) => {
    console.log("I open area for comment");
  }

  const handleClick2 = (e) => {
    console.log("I like post");
  }


  const classes = useStyles();
  return (
    <div className={classes.root}>

      <div className={classes.postMainHeader}>
        <div className={classes.postMainHeaderContent}>

          {(userActive) &&
          <div className={classes.postMainHeaderItem}>
            <UserAvatar
              size="small"
              user={userActive}
              textLink={true}
              borderAround={true}
            />
          </div>
          }

          <div className={classes.postMainHeaderItem}>
            <div className={classes.headerDescriptionItem}>
              post description
            </div>
          </div>

        </div>
      </div>


      <div className={classes.postMainBody}>
        <div className={classes.postMainBodyContent}>

          <div className={classes.postMainBodyItem}>
            Photo
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
              <IAddComment onClick={handleClick1} />
              <IFavoritePost onClick={handleClick2} />
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
    users: state.users.users,
    isLoading: state.users.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(PostMain);