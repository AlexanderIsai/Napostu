import React from 'react';
import {MyButton, LightTooltip} from './ButtonTxtStyles';
import {createMuiTheme} from '@material-ui/core/styles';
import {ThemeProvider} from '@material-ui/styles';
import PropTypes from 'prop-types';

const theme = createMuiTheme({
  props: {
    // Name of the component
    MuiButtonBase: {
      // The default props to change
      disableRipple: true, // No more ripple
    },
  },
});


const ButtonTxt = (props) => {
  const {type, onClick, text, className, tooltip, tooltipTitle, tooltipPlacement} = props;

  return (
    <>
      {(tooltip) &&
      <>
        <ThemeProvider theme={theme}>
          <LightTooltip title={tooltipTitle} placement={tooltipPlacement}>
            <MyButton
              data-testid='comp-button' type={type}
              onClick={onClick} className={className}>
              {text}
            </MyButton>
          </LightTooltip>
        </ThemeProvider>
      </>
      }

      {(!tooltip) &&
      <>
        <ThemeProvider theme={theme}>
            <MyButton
              data-testid='comp-button' type={type}
              onClick={onClick} className={className}>
              {text}
            </MyButton>
        </ThemeProvider>
      </>
      }
    </>
  );
}


ButtonTxt.defaultProps = {
  type: "button",
  onClick: null,
  className: "myButton",
  tooltip: false,
  tooltipTitle: "tooltip",
  tooltipPlacement: "top-end"
}
ButtonTxt.propTypes = {
  onClick: PropTypes.func,
  text: PropTypes.string.isRequired,
  className: PropTypes.string,
  tooltipTitle: PropTypes.string.isRequired,
  tooltipPlacement: PropTypes.string.isRequired,
}
export default ButtonTxt;