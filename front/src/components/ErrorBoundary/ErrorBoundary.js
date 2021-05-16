import React from 'react';
import './ErrorBoundary.scss';
import DeathStar from './death-star.jpg';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = {hasError: false, error: null, errorInfo: null};
  }

  // componentDidCatch() - жизненный цикл вызывается после того, как дочерний компонент выдал ошибку.
  // - вызывается во время фазы «фиксации», поэтому побочные эффекты разрешены
  // - следует использовать для таких вещей, как ошибки регистрации
  // - получает два параметра:
  // error - ошибка, которую выкинули.
  // info (errorInfo) - объект с componentStack ключом, содержащий информацию о том, какой компонент выдал ошибку .
  componentDidCatch(error, errorInfo) {
    this.setState({hasError: true, error: error, errorInfo: errorInfo});
  }

  // getDerivedStateFromError() - жизненный цикл вызывается после того, как дочерний компонент выдал ошибку.
  // - получает сообщение об ошибке в качестве параметра и должно возвращать значение для обновления состояния.
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