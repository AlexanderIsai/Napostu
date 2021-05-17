import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      position: "relative",
      maxWidth: "1280px",
      margin: " 0 auto",
      height: "100vh",
      overflow: "scroll",
      textAlign: "center",
      background: "linear-gradient(90deg, rgba(240,241,242,1) 0%, " +
        "rgba(253,253,253,1) 25%, rgba(255,255,255,1) 50%, rgba(254,254,254,1) 75%, " +
        "rgba(240,241,242,1) 100%)",

    },

    paddingBox: {
      padding: "0px 24px 0 24px",
    },

    title: {
      fontSize: "2em",
      fontWeight: "500",
      letterSpacing: "-0.04em",
      color: "gray"
    },

    smallTitle: {
      textAlign: "right",
      fontSize: "0.8em",
      fontWeight: "500",
      color: "#3c415d99",
      margin: 0,
    },

    smallTitlePostsLine: {
      textAlign: "left",
      fontSize: "0.8em",
      fontWeight: "500",
      color: "white",
      position: "sticky",
      top: "212px",
      display: "table",
      background: "#ffd54b",
      padding: "0 4px",
      margin: 0,
    },

    link: {
      textDecoration: "none",
      fontSize: "0.7em"
    },

    linkToSubscribe: {
      textDecoration: "none",
      fontSize: "1.2em",
      color: "#f99f38",
      fontWeight: "500",
      lineHeight: "0.7",
      letterSpacing: "0.027em",
      margin: 0,
      fontVariant: "all-small-caps",
    },

    subscribtionElBoxSticky: {
      position: "sticky",
      top: "16px",
    },

    subscribtions: {
      display: "flex",
      justifyContent: "flex-start",
      marginLeft: "0",
      marginBottom: "36px",
      overflowX: "scroll",

      background: "none",
      boxShadow: "none",
      borderRadius: 0,
      borderBottom: "1px solid lightgray",
      borderRight: "1px solid lightgray",
    },

    subscribtionElBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",

      minWidth: "100px",
      maxWidth: "100px",
      overflowX: "scroll",
      background: "rgb(255 255 255 54%)",

      borderRadius: 16,
      boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
      padding: "8px",
      margin: "8px",
    },

    spaceNeedsAtTheEndOfList: {
      minWidth: "8px",
    },

    postsLine: {
      marginBottom: "24px",
    },

    post: {
      margin: "16px 2px 54px",
      background: "none",
    },


    //------------------ sideBar ------------------
    sideBarStickyBox: {
      textAlign: 'left',
      position: "sticky",
      top: "194px",
    },

    //------------------ sideBar activeUser ------------------
    activeUserPaper: {
      height: "134px",
      marginLeft: "36px",
      marginBottom: "36px",
      boxShadow: "none",
    },

    activeUserBox: {
      display: "flex",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-evenly",
      height: "100%",

      borderRight: "1px solid lightgray",
      borderBottom: "1px solid lightgray",
      background: "#ffffff",
    },

    activeUserTxtBox: {
      display: "flex",
      flexDirection: "column",
      textAlign: "center",
      margin: "0 8px",
      color: "#ffffff",
      background: "#ffd54b",
      cursor: "pointer",
    },

    activeUserTxt: {
      fontSize: "0.86em",
      fontWeight: "400",
      fontVariant: "small-caps",
      lineHeight: "0.96",
      letterSpacing: "0.027em",
      margin: 0,
      padding: "4px",
    },

    activeUserAvatarBox: {
      marginRight: "8px",
    },

    ActiveUserlink: {
      position: "relative",
      top: "-16px",
      textDecoration: "none",
      fontSize: "0.7em",
      color: "#ffffff",
      // textShadow: "0.5px 0 0.5px gray," + "0 0.5px 0.5px gray," + "-0.5px 0 0px gray," + "0 -0.5px 0.5px gray",
    },


    //------------------ sideBar OfferToSubscribe ------------------
    sideBarOfferToSubscribe: {
      padding: "8px 8px 0",
      marginTop: "16px",
      marginLeft: "36px",
      marginBottom: 0,
      height: "544px",
      overflowY: "scroll",
    },

    offerToSubscribeElBox: {
      display: "flex",
      alignItems: "center",
      flexWrap: "nowrap",
      overflowX: "scroll",
      margin: "8px 4px 16px",

      borderRadius: 16,
      boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
      padding: "8px",
      background: "#ffffff",
    },

    offerToSubscribeItem: {
      alignSelf: "center",
      paddingRight: "12px",
      textDecoration: "none",
      fontSize: "0.7em",
      color: "#000000",
    },

  })
);

export default useStyles;