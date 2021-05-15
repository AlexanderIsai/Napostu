import React from 'react';
import useStyles from './UserAvatarStyles';

import Avatar from '@material-ui/core/Avatar';
import {connect} from "react-redux";
import {Link as RouterLink} from "react-router-dom";
import Link from "@material-ui/core/Link";


const UserAvatar = (props) => {
  const {size, user, textLink, borderAround} = props;

  let nickTextLink, userAlt, borderStyle, sizeStyle, boxSizeStyle;

  if (user) {
    nickTextLink = `${user.email}`.substr(0, 1) + `.${user.email}`.split('@')[0];
    userAlt = `${user.email}`.substr(0, 1).toUpperCase() + ` .${user.email}`.split('@')[0];
    // console.log(user.avatar);
  }


  const classes = useStyles();

  if (borderAround) {
    borderStyle = classes.avatarPhotoBoxBorder;
  } else {
    borderStyle = classes.avatarPhotoBox;
  }

  switch (size) {
    case "small":
      sizeStyle = classes.small;
      boxSizeStyle = classes.avatarContentBox;
      break;

    case "medium":
      sizeStyle = classes.medium;
      boxSizeStyle = classes.avatarContentBox;
      break;

    case "large":
      sizeStyle = classes.large;
      boxSizeStyle = classes.avatarContentBoxLarge;
      break;

    default:
      sizeStyle = classes.small;
      boxSizeStyle = classes.avatarContentBox;
  }

  return (
    <>
      {user &&
      <div className={boxSizeStyle}>
        <Link component={RouterLink} to={`/users/${user._id}`} style={{textDecoration: 'none'}}>
          <div className={borderStyle}>
            <Avatar alt={userAlt} src={user.avatar} className={sizeStyle}/>
            {/*src="./images/avatars/AliceInWonder.jpg"*/}
          </div>
        </Link>
        {textLink &&
        <Link component={RouterLink} to={`/users/${user._id}`} className={classes.nickTextLink}
              style={{textDecoration: 'none'}}>
          {nickTextLink}
        </Link>
        }
      </div>
      }
    </>
  )

};


const mapStateToProps = (state) => {
  return {}
}
const mapDispatchToProps = (dispatch) => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(UserAvatar);