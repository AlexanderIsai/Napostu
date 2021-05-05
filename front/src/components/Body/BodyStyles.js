import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  wrapper: {
    padding: "36px 24px 0 24px",
    height: "100vh",
    overflow: "scroll",

    textAlign: "center",
    background: "linear-gradient(90deg, rgba(240,241,242,1) 0%, " +
      "rgba(253,253,253,1) 25%, rgba(255,255,255,1) 50%, rgba(254,254,254,1) 75%, " +
      "rgba(240,241,242,1) 100%)",
  },
}));

export default useStyles;