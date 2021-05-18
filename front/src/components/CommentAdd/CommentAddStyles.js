import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  commentBox: {
    position: "inherit",
    flexBasis: "100%",
  },

  commentArea: {
    width: "100%",
    padding: "10px",
    margin: "0px",
    height: "52px",
    resize: "none",

    fontFamily: "inherit",
    fontSize: "0.8em",
    color: " #555555",

    outline: "none",
    // outlineColor: "#ffd54b",
    border: "none",
    // borderColor: "lightgrey",
    background: "transparent",
  }
}));

export default useStyles;