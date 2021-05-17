import React from 'react';
import IconButton from "@material-ui/core/IconButton";
import Tooltip from '@material-ui/core/Tooltip';
import {useStyles, MyAddCommentIcon, MyThumbUpIcon, MyFavoriteIconPassive, MyFavoriteIconActive} from './IconsStyle';
import {createMuiTheme} from "@material-ui/core/styles";
import {ThemeProvider} from "@material-ui/styles";

const theme = createMuiTheme({
  props: {
    MuiButtonBase: {
      disableRipple: true,
    },
  },
});


export const IFavoritePost = (props) => {
  const {onClick, isFavorite} = props;
  const handleClick = () => {
    onClick()
  }

  const classes = useStyles();
  return (
    <>
      {(isFavorite) &&
      <ThemeProvider theme={theme}>
        <IconButton aria-label="add favorite" variant="contained" color="primary" className={classes.iconStile}>
          <Tooltip title="remove" arrow placement="top-start">
            <MyFavoriteIconActive
              onClick={handleClick}
            />
          </Tooltip>
        </IconButton>
      </ThemeProvider>
      }
      {(!isFavorite) &&
      <ThemeProvider theme={theme}>
        <IconButton aria-label="add favorite" variant="contained" color="primary" className={classes.iconStile}>
          <Tooltip title="add to favorites" arrow placement="top-start">
            <MyFavoriteIconPassive
              onClick={handleClick}
            />
          </Tooltip>
        </IconButton>
      </ThemeProvider>
      }
    </>
  )
};


export const ILikePost = (props) => {
  const {onClick} = props;
  const handleClick = () => {
    onClick()
  }

  const classes = useStyles();
  return (
    <>
      <ThemeProvider theme={theme}>
        <IconButton aria-label="add favorite" variant="contained" color="primary" className={classes.iconStile}>
          <Tooltip title="like" arrow placement="top-start">
            <MyThumbUpIcon
              onClick={handleClick}
            />
          </Tooltip>
        </IconButton>
      </ThemeProvider>
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
      <ThemeProvider theme={theme}>
        <IconButton aria-label="add comment" variant="contained" color="primary" className={classes.iconAddComment}>
          <Tooltip title="place comments" arrow placement="left-start">
            <MyAddCommentIcon
              onClick={handleClick}
            />
          </Tooltip>
        </IconButton>
      </ThemeProvider>
    </>
  )
};