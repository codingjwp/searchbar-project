import { Component, ReactNode } from 'react';
import ErrorModal from '../components/ErrorModal';

interface ErrorBoundaryProps {
  children: ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
}

class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError) {
      const message = {
        stack: this.state.error?.stack ?? '',
        name: this.state.error?.name ?? 'Error',
        message: this.state.error?.message ?? 'The Error cannot be identified.',
      };
      return <ErrorModal error={message} />;
    }
    return this.props.children;
  }
}

export default ErrorBoundary;
