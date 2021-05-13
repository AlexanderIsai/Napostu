import { makeStyles } from '@material-ui/core/styles';
import React from "react";


const useStyles = makeStyles((theme) => ({
  commentBox: {
    position: "relative",
  },

  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '98%',
      position: "inherit",
      zIndex: -1,
    },
  },

  commentLabel: {
    htmlFor: "comment",

  },

  commentTextArea: {
    id: "comment",
    name: "comment",

    fontFamily: "inherit",
    rows: "3",
    rowsMax: 3,

    width: "100%",
    height: "2em",
    whiteSpace: "pre-line",
    autoResize: true,
    fontSize: "1em",
    overflow: "visible"
  },




}));

export default useStyles;