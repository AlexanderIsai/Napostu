import { withStyles, makeStyles} from '@material-ui/core/styles';
import {indigo, yellow, grey} from '@material-ui/core/colors';
import AddCommentIcon from "@material-ui/icons/AddComment";
import FavoriteIcon from '@material-ui/icons/Favorite';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';


export const useStyles = makeStyles((theme) => ({
  iconStile: {
    margin: "0 24px 0 0",
    position: "inherit",
  },

  iconAddComment: {
    margin: "0 0 0 24px",
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
      color: yellow[700],
    },
  },
}))(ThumbUpIcon);


export const MyAddCommentIcon = withStyles((theme) => ({
  root: {
    color: grey[400],
    '&:hover': {
      color: yellow[700],
    },
    '&:active': {
      color: yellow[900],
    },
  },
}))(AddCommentIcon);


export const MyFavoriteIconPassive = withStyles((theme) => ({
  root: {
    color: grey[300],
    '&:hover': {
      color: grey[400],
    },
    '&:active': {
      color:yellow[700],
    },
  },
}))(FavoriteIcon);


export const MyFavoriteIconActive = withStyles((theme) => ({
  root: {
    color: yellow[700],
    '&:hover': {
      color: grey[400],
    },
    '&:active': {
      color: grey[300],
    },
  },

}))(FavoriteIcon);

