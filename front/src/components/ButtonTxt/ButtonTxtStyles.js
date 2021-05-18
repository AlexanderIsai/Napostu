import {withStyles} from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Tooltip from "@material-ui/core/Tooltip";


export const MyButton = withStyles({
  root: {
    position: 'inherit',
    justifyContent: "flex-start;",
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: "0.8em",
    fontWeight: "400",
    color: "#555555",
    padding: '0 0 0 12px',
    border: '0px',
    lineHeight: 1.5,
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
    '&:hover': {
      backgroundColor: '#fafafa',
      boxShadow: 'none',
    },
    '&:active': {
      boxShadow: 'none',
    },
    '&:focus': {
      // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
    },
  },
})(Button);


export const LightTooltip = withStyles((theme) => ({
  tooltip: {
    backgroundColor: "transparent",
    fontSize: "0.8em",
    fontWeight: "400",
    color: "gray",
    position: "relative",
    left: "-20px"
  },
}))(Tooltip);
