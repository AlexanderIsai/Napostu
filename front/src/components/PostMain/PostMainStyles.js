import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100%",
    background: "#ffffff",
  },

// ---------------postMain Header-------
  postMainHeader: {
    padding: "4px 4px 0 0",
    background: "linear-gradient(90deg, rgba(240,241,242,1) 0%, " +
      "rgba(253,253,253,1) 25%, rgba(255,255,255,1) 50%, rgba(254,254,254,1) 75%, " +
      "rgba(240,241,242,1) 100%)",
  },

  postMainHeaderContent: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },

  postMainHeaderItem: {
    padding: "8px",
    margin: "0 8px 0",
  },

  headerDescription: {
    color: "#585757",
    fontSize: "0.9em",
  },


// ---------------postMain Body-------
  postMainBody: {
    // height: "450px",
    padding: "0",
    textAlign: "center",
    borderBottom: "4px solid darkgray"
  },

  postMainBodyItem: {
    // height: "450px",
    display: "flex",
    overflow: "hidden",
    alignItems: "center",
    justifyContent: "center",
  },

  bodyImage: {
    display: "block",
    width: "100%",
    margin: 0
  },


// --------------- postMain Footer -------
  postMainFooter: {
    height: "100%",
    display: "flex",
    alignItems: "stretch",
    flexDirection: "column",
  },

  //-----------------------------------------
  footerIcons: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    overflow: "scroll",
  },

  //-----------------------------------------
  likeCounter: {
    padding: "0 38px 0 0",
    fontSize: "0.9em",
    color: "darkgray",
    overflow: "scroll",
    lineHeight: "0.8",
  },

  likeCounterAfter: {
    fontSize: "0.7em",
    marginLeft: "4px"
  },

  //-----------------------------------------
  footerComments: {
    paddingTop: "4px",
    paddingBottom: "10px",
    textAlign: "left",
    overflow: "scroll",
  },

  //-----------------------------------------
  footerAddComments: {
    width: "100%",
    margin: "8px 0 0",
    display:"flex",
    background: "linear-gradient(90deg, rgba(240,241,242,1) 0%, " +
      "rgba(253,253,253,1) 25%, rgba(255,255,255,1) 50%, rgba(254,254,254,1) 75%, " +
      "rgba(240,241,242,1) 100%)",
  },

}));

export default useStyles;
