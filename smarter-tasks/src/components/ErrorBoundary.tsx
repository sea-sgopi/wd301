import React, { Component, ErrorInfo, ReactNode } from "react";

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    // You can log the error or send it to an error reporting service
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <div className="flex items-center justify-center h-screen">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-lg max-w-md text-center">
        <svg className="w-8 h-8 inline-block fill-current text-red-600 mb-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"/>
        </svg>
        <p className="font-semibold text-lg">Something went wrong.</p>
        <p className="text-sm mt-2">Please try again later or contact support.</p>
      </div>
    </div>
    }

    return this.props.children;
  }
}

export default ErrorBoundary;