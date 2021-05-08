import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100%",
    background: "#ffffff",
  },


  postMainHeader: {
    // height: "54px",
    padding: "4px 4px 0 0",
    background: "linear-gradient(90deg, rgba(240,241,242,1) 0%, " +
      "rgba(253,253,253,1) 25%, rgba(255,255,255,1) 50%, rgba(254,254,254,1) 75%, " +
      "rgba(240,241,242,1) 100%)",
    // borderBottom: "1px solid lightgray",
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

  headerDescriptionItem: {

  },


  postMainBody: {
    height: "500px",
    padding: "0",
    textAlign: "center",
  },

  postMainBodyContent: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
  },

  postMainBodyItem: {
    // height: "100%",
    // background: "#eeeeee",
  },


  postMainFooter: {
    padding: "4px 4px 0",
    textAlign: "left",
    // borderTop: "1px solid lightgray",
  },

  postMainFooterContent: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    textAlign: "center",

  },

  footerLineItem: {
    height: "4px",
    background: "linear-gradient(90deg, rgba(240,241,242,1) 0%, " +
      "rgba(253,253,253,1) 25%, rgba(255,255,255,1) 50%, rgba(254,254,254,1) 75%, " +
      "rgba(240,241,242,1) 100%)",
  },

  postMainFooterItem: {
    marginBottom: "8px",
    textAlign: "left",
  },

  footerIconsItem: {

  },

  footerCommentsItem: {

  },


}));

export default useStyles;