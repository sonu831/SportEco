import React, { Component, ErrorInfo } from "react";
import { View, Text } from "react-native";
import { Props, State } from "./config";
import ErrorComponent from "./ErrorComponent";

class ErrorBoundary extends Component<Props, State> {
  state: State = {
    hasError: false,
    error: { message: "", stack: "" },
    info: { componentStack: "" },
  };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log("ErrorBoundary error and info", error, info);
    this.setState({
      error: { message: error.message, stack: error.stack },
      info,
    });
  }

  handleRetry = () => {
    this.setState({ hasError: false });
  };

  render() {
    const { hasError, error, info } = this.state;
    const { children } = this.props;

    if (hasError) {
      return <ErrorComponent error={error} onRetry={this.handleRetry} />;
    }

    return children;
  }
}

export default ErrorBoundary;
