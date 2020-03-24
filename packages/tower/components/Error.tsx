import React from "react";

export default class ErrorBoundary extends React.Component<
  {},
  { hasError: boolean; logged: boolean }
> {
  constructor(props) {
    super(props);
    this.state = { hasError: false, logged: false };
  }

  static getDerivedStateFromError(error) {
    // Update state so the next render will show the fallback UI.
    console.log(error);
    return { hasError: true, logged: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can also log the error to an error reporting service
  }

  render() {
    if (this.state.hasError) {
      // You can render any custom fallback UI
      return <h1>Something went wrong.</h1>;
    }

    return this.props.children;
  }
}
