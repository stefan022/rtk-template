/* eslint-disable no-console */
import { Component, ErrorInfo, ReactNode } from 'react';

interface IProps {
    children?: ReactNode;
}

interface IState {
    hasError: boolean;
}

class ErrorBoundary extends Component<IProps, IState> {
    public state: IState = {
        hasError: false,
    };

    // eslint-disable-next-line
    public static getDerivedStateFromError(_: Error): IState {
        return { hasError: true };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error('Uncaught error:', error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div>
                    <h1>Oops.. something went wrong.</h1>
                    <h2>Please, try again later.</h2>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
