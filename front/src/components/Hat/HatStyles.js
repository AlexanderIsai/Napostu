import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    position: "sticky",
    top: "0px",
    height: "178px",
    marginBottom: "16px",
    background: "linear-gradient(90deg, rgba(240,241,242,1) 0%, " +
      "rgba(253,253,253,1) 25%, rgba(255,255,255,1) 50%, rgba(254,254,254,1) 75%, " +
      "rgba(240,241,242,1) 100%)",
  },

  textItem: {
    position: "relative",
    top: "25px",
    fontSize: "6.48em",
    color: "#f7f7f7",
  },

})
);

export default useStyles;
