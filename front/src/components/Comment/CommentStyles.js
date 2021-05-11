import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles((theme) => ({
  commentBox: {
    position: "relative",
  },

  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '98%',
      position: "inherit",
    },
  },




}));

export default useStyles;