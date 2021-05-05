import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    flexGrow: 1,
    boxSizing: "border-box",
    fontFamily: `Roboto`,
  },
}));

export default useStyles;