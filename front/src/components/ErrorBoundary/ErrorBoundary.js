import React from 'react';
import './ErrorBoundary.scss';
import DeathStar from './death-star.jpg';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false, error: null, errorInfo: null};
  }

  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true, error: error, errorInfo: errorInfo});
  }

  static getDerivedStateFromError(error) {
    return {hasError: true};
  }

  render() {
    const {hasError, error, errorInfo} = this.state;
    const {children} = this.props;

    if (hasError) {
      // console.log("hasError: ", error);
      // console.log("component threw the error: ", errorInfo);
      return (
        <div className="error-boundary">
          <div className="error-boundary">an error occurred!</div>
          <img src={DeathStar} alt="logo"/>
        </div>

      )
    }

    return (
      <>{children}</>
    )
  }
}

export default ErrorBoundary;