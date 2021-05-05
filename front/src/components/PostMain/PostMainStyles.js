import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    height: "100%",
    background: "#ffffff",
  },


  postMainHeader: {
    // height: "54px",
    padding: "4px 4px 0",
    borderBottom: "1px solid lightgray",
  },
  postMainHeaderContent: {
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
  postMainHeaderItem: {
    padding: "8px"
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
    height: "100%",
    // lineHeight: "100%",
    background: "gold",
  },


  postMainFooter: {
    padding: "4px 4px 0",
    textAlign: "left",
    // background: "gray",
  },
  postMainFooterContent: {
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    textAlign: "center",

  },
  postMainFooterItem: {
    marginBottom: "8px",
    textAlign: "left",
  },

  footerIconsItem: {},
  footerDescriptionItem: {},
  footerCommentsItem: {},


}));

export default useStyles;