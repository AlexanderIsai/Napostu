// import React from 'react';
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      cursor: "pointer",
    },
  },

  avatarContentBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100px",
    overflow: "scroll",
  },

  avatarContentBoxLarge: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    overflow: "scroll",
  },

  avatarPhotoBox: {
    padding: "4px",
  },

  avatarPhotoBoxBorder: {
    padding: "4px",
    borderRadius: "50%",
    border: "1px solid gold",
  },

  nickTextLink: {
    textDecoration: "none",
    fontSize: "0.7em",
    color: "#000000",
    width: "inherit",
    overflow: "scroll",
  },

  small: {
    position: "inherit",
    width: theme.spacing(5),
    height: theme.spacing(5),
  },

  medium: {
    position: "inherit",
    width: theme.spacing(9),
    height: theme.spacing(9),
  },

  large: {
    position: "inherit",
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
}));

export default useStyles;