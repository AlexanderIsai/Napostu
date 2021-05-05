import React, {useEffect} from 'react';
import useStyles from './PostMainStyles';
import {connect, useSelector} from "react-redux";
import {Paper} from "@material-ui/core";
import Link from '@material-ui/core/Link';
import {Link as RouterLink} from 'react-router-dom';
import UserAvatar from "../Avatar/Avatar";


const PostMain = (props) => {
  const {users} = props;
  // console.log("USERS (from props) on post component: ", users);

  // let usersH = useSelector(state => state.users.users);
  // console.log("usersH on post component: ", usersH);
  let id, userActive;
  if (!users[0]) {
    console.log("not yet!!!")
  } else {
    console.log("USERS (from props) on post component: ", users);

    id = users.findIndex(obj => obj.id === "01");
    console.log("userActive ID : ", id);
    console.log("userActive : ", users[id]);
    userActive = users[id];
    console.log("userActive email : ", userActive.email);
  }


  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.postMainHeader}>
        <div className={classes.postMainHeaderContent}>
          {(userActive) &&
          <div className={classes.postMainHeaderItem}>
              <UserAvatar
                alt={`${userActive.email}`.substr(0, 1).toUpperCase() + ` .${userActive.email}`.split('@')[0]}
                src={userActive.avatar}
                size="smallPlus"
                userActive={userActive}
              />
          </div>
          }
          <div className={classes.postMainHeaderItem}>post</div>

        </div>
      </div>
      <div className={classes.postMainBody}>
        <div className={classes.postMainBodyContent}>
          <div className={classes.postMainBodyItem}>
            postMainBody: <br/>Photo
          </div>
        </div>
      </div>
      <div className={classes.postMainFooter}>
        <div className={classes.postMainFooterContent}>
          postMainFooterContent:
          <div className={classes.postMainFooterItem}>
            <div className={classes.footerIconsItem}>
              Icons
            </div>
          </div>
          <div className={classes.postMainFooterItem}>
            <div className={classes.footerDescriptionItem}>
              Description
            </div>
          </div>
          <div className={classes.postMainFooterItem}>
            <div className={classes.footerCommentsItem}>
              Comments
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
  return {
    // getUsers: () => dispatch(getUsers()),
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(PostMain);