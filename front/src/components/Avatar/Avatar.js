import React from 'react';
import useStyles from './AvatarStyles';

import Avatar from '@material-ui/core/Avatar';
import {connect} from "react-redux";
import {Link as RouterLink} from "react-router-dom";
import Link from "@material-ui/core/Link";


const UserAvatar = (props) => {
  const {alt, url, size,
    userActive,
    // userId, users, userEmail
  } = props;


  const classes = useStyles();
  return (
    <>
      {size === "smallPlus" &&
      <div>
        <Link component={RouterLink} to={`/users/${userActive.id}`} style={{textDecoration: 'none'}}>
          <Avatar alt={alt} src={{url}} className={classes.smallPlus}/>
        </Link>
        <Link component={RouterLink} to={`/users/${userActive.id}`}
              style={{textDecoration: 'none'}}>
          {`${userActive.email}`.substr(0, 1) + `.${userActive.email}`.split('@')[0]}
        </Link>
      </div>

      }



      {size === "small" &&
      <Avatar alt={alt} src={{url}} className={classes.small}/>
      }

      {size === "medium" &&
      <Avatar alt={alt} src={{url}} className={classes.medium}/>
      }

      {size === "large" &&
      <Avatar alt={alt} src={{url}} className={classes.large}/>
      }

    </>
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

export default connect(mapStateToProps, mapDispatchToProps)(UserAvatar);