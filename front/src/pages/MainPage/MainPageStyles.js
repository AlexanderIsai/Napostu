import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      // background: "red",
      position: "relative",
    },

    title: {
      // textAlign: "center",
      fontSize: "2em",
      fontWeight: "500",
      letterSpacing: "-0.04em",
      color: "gray"
    },

    smallTitle: {
      textAlign: "right",
      fontSize: "0.7em",
      fontWeight: "500",
      color: "lightgray",
      paddingBottom: "4px",
    },

    smallTitlePostsLine: {
      textAlign: "left",
      fontSize: "0.7em",
      fontWeight: "500",
      color: "white",
      position: "sticky",
      top: "180px",
      display: "table",
      background: "#3f51b5",
      padding: "0 4px",
      marginBottom: "4px",
    },

    link: {
      textDecoration: "none",
      fontSize: "0.7em"
    },

    subscribtionElBoxSticky: {
      position: "sticky",
      top: 0,
    },

    subscribtions: {
      display: "flex",
      justifyContent: "flex-start",
      marginLeft: "0",
      marginBottom: "24px",
      overflowX: "scroll",

      // background: "white",
      background: "none",
      boxShadow: "none",
      borderRadius: 0,
      borderBottom: "1px solid lightgray",
      borderTop: "1px solid lightgray",
    },

    subscribtionElBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",

      minWidth: "100px",
      maxWidth: "100px",
      overflowX: "scroll",
      background: "#ffffff",
      // border: "1px solid red",
      borderRadius: 16,
      // borderRadius: "50%",
      boxShadow: "0px 2px 1px -1px rgb(0 0 0 / 20%), 0px 1px 1px 0px rgb(0 0 0 / 14%), 0px 1px 3px 0px rgb(0 0 0 / 12%)",
      padding: "8px",
      margin: "8px",
    },

    postsLine: {
      marginBottom: "24px",
    },

    post: {
      // padding: "8px",
      // height: "500px",
      marginBottom: "36px",
      background: "none",
    },


    //------------------ sideBar ------------------
    sideBarStickyBox: {
      textAlign: 'left',
      position: "sticky",
      top: 0,
    },
    //------------------ sideBar activeUser ------------------
    activeUserPaper: {
      height: "126px",
      marginLeft: "36px",
      marginBottom: "24px",
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
      color: "#3f51b5",
    },

    activeUserTxt: {
      fontSize: "0.81em",
      fontWeight: "500",
      fontVariant: "small-caps",
      lineHeight: "1.08",
      letterSpacing: "0.027em",
    },

    activeUserAvatarBox: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      paddingRight: "8px",
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
      padding: "8px",
      marginLeft: "36px",
      marginBottom: 0,
      height: "336px",
      overflowY: "scroll",
    },

    offerToSubscribeElBox: {
      display: "flex",
      flexWrap: "nowrap",
      margin: "8px 4px 16px",
    },

    offerToSubscribeItem: {
      alignSelf: "center",
      paddingRight: "12px",
      textDecoration: "none",
      fontSize: "0.7em",
      color: "#000",
    }
    //____________________________________________________________________

  }))
;

export default useStyles;