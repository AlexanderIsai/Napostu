// import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    '& > *': {
      margin: theme.spacing(1),
      cursor: "pointer"
    },
  },
  small: {
    width: theme.spacing(5),
    height: theme.spacing(5),
  },

  smallPlus: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },

  medium: {
    width: theme.spacing(9),
    height: theme.spacing(9),
  },

  large: {
    width: theme.spacing(13),
    height: theme.spacing(13),
  },
}));

export default useStyles;