import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import Tooltip from '@material-ui/core/Tooltip';
import {useStyles, MyAddCommentIcon, MyThumbUpIcon, MyFavoriteIcon} from './IconsStyle';


export const ILikePost = (props) => {
  const {onClick} = props;
  const handleClick = () => {
    onClick()
  }

  const classes = useStyles();
  return (
    <>
      <IconButton aria-label="add favorite" variant="contained" color="primary" className={classes.iconStile}>
        <Tooltip title="like" arrow placement="top-start">
          <MyThumbUpIcon
            onClick={handleClick}
          />
        </Tooltip>
      </IconButton>
    </>
  )
};


export const IFavoritePost = (props) => {
  const {onClick} = props;
  const handleClick = () => {
    onClick()
  }

  const classes = useStyles();
  return (
    <>
      <IconButton aria-label="add favorite" variant="contained" color="primary" className={classes.iconStile}>
        <Tooltip title="add favorites" arrow placement="top-start">
          <MyFavoriteIcon
            onClick={handleClick}
          />
        </Tooltip>
      </IconButton>
    </>
  )
};


export const IAddComment = (props) => {
  const {onClick} = props;
  const handleClick = () => {
    onClick()
  }

  const classes = useStyles();
  return (
    <>
      <IconButton aria-label="add comment" variant="contained" color="primary" className={classes.iconStile}>
        <Tooltip title="add comments" arrow placement="top-start">
          <MyAddCommentIcon
            onClick={handleClick}
          />
        </Tooltip>
      </IconButton>
    </>
  )
};

