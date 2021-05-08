import {createMuiTheme, withStyles, makeStyles, ThemeProvider} from '@material-ui/core/styles';
import {green, purple} from '@material-ui/core/colors';

import IconButton from "@material-ui/core/IconButton";
import AddCommentIcon from "@material-ui/icons/AddComment";
import FavoriteIcon from '@material-ui/icons/Favorite';

export const useStyles = makeStyles((theme) => ({
  iconStile: {
    // margin: theme.spacing(1),
    position: "inherit",
  },
}));

export const MyIconButton = withStyles((theme) => ({
  root: {
  //   color: theme.palette.getContrastText(green[500]),
  //   backgroundColor: green[500],
  //   '&:hover': {
  //     backgroundColor: green[700],
  //   },
  },
}))(IconButton);

export const MyAddCommentIcon = withStyles((theme) => ({
  root: {
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  },

}))(AddCommentIcon);


export const MyFavoriteIcon = withStyles((theme) => ({
  root: {
    color: "white",

    backgroundColor: green[500],
    '&:hover': {
      backgroundColor: green[700],
    },
  },
}))(FavoriteIcon);


