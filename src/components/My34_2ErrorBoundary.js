import React, { Component } from "react";

/**An ErrorBoundary class
 * 
 * Error boundry - A class component that implements either one or both of te lifecycle methods 
 * 1. getDerivedStateFromError - used to render a fallbackUI after error
 * 2. componentDidCatch - log the error info.
 * becomes an error boundry
 * 
 * But these doesn't catch error thrown from event handlers. For something like onClick
 * handler, need to use regular try catch block.
 */

class My34_2ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false };
    }

    static getDerivedStateFromError(error) {
        // Update state so the next render will show the fallback UI
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // Log the error if needed. 
        console.error("Error caught in ErrorBoundary:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            // Render a fallback UI
            return <h1>Something went wrong.</h1>;
        }

        // Render children if no error
        return this.props.children;
    }
}

export default My34_2ErrorBoundary;
