import React from "react";
import { Link } from "react-router-dom";
class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }
  
    componentDidCatch(error, errorInfo) {
      this.setState({ hasError: true });
      console.log(`[!-${error}!-]`,errorInfo);
    }
  
    render() {
      if (this.state.hasError) {
        return <p>Looks like something went wrong! Our staff is working on the solution for this problem <br />You can try <Link onClick={() => {localStorage.clear()}}>clearing your local storage and refreshing the page to resolve the issue</Link></p>;
      }
      return this.props.children;
    }
  }
  

export default ErrorBoundary
  