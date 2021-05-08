import {createMuiTheme, withStyles, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import {green, purple, pink, indigo} from '@material-ui/core/colors';

import AddCommentIcon from "@material-ui/icons/AddComment";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

export const useStyles = makeStyles((theme) => ({
  iconStile: {
    margin: theme.spacing(1),
    position: "inherit",
  },
}));


export const MyThumbUpIcon = withStyles((theme) => ({
  root: {
    color: indigo[300],
    '&:hover': {
      color: indigo[700],
    },
    '&:active': {
      color: green[700],
    },
  },
}))(ThumbUpIcon);


export const MyAddCommentIcon = withStyles((theme) => ({
  root: {
    color: purple[300],
    '&:hover': {
      color: purple[700],
    },
    '&:active': {
      color: green[700],
    },
  },
}))(AddCommentIcon);


export const MyFavoriteIcon = withStyles((theme) => ({
  root: {
    color: pink[50],
    '&:hover': {
      color: pink["A400"],
    },
    '&:active': {
      color: green[700],
    },
  },
}))(FavoriteIcon);


