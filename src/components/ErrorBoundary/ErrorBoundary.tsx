// import "./ErrorBoundary.scss";
import React, { Component, ErrorInfo, ReactNode } from 'react';

// styles
import {
  ErrorBoundaryMain,
  ErrorBoundaryContainer,
  ErrorBoundaryText,
} from './ErrorBoundary.styles';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);

    this.state = {
      hasError: false,
    };
  }

  static getDerivedStateFromError(e: Error): State {
    return { hasError: true };
  }

  public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('Uncaught error:', error, errorInfo);
  }

  render() {
    const { hasError } = this.state;

    if (hasError) {
      return (
        <ErrorBoundaryMain>
          <ErrorBoundaryContainer>
            <ErrorBoundaryText>
              Error occurred during execution, we are sorry ☹!
            </ErrorBoundaryText>
          </ErrorBoundaryContainer>
        </ErrorBoundaryMain>
      );
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
