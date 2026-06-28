import { Component, ErrorInfo, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class ErrorBoundary extends Component<Props, State> {
  state: State = { hasError: false };

  static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error(
      "[ErrorBoundary] Uncaught error:",
      error,
      info.componentStack,
    );
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen flex items-center justify-center bg-background px-4">
          <div className="text-center max-w-md">
            <h1 className="text-2xl font-serif font-semibold text-navy mb-3">
              Something went wrong
            </h1>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              This page couldn't load properly. Refresh to try again. If the
              problem continues, reach us at{" "}
              <a
                href="mailto:info@sadhyata.com"
                className="text-gold underline underline-offset-2"
              >
                info@sadhyata.com
              </a>
            </p>
            <button
              onClick={() => window.location.reload()}
              className="px-6 py-3 bg-navy text-primary-foreground text-sm font-medium uppercase tracking-wider hover:bg-navy-light transition-colors"
            >
              Refresh Page
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
