import React, {ErrorInfo, Suspense} from "react";
import {ErrorPage} from "widgets/ErrorPage/ui/ErrorPage";

interface ErrorBoundaryProps {
    children: React.ReactNode;
}

interface ErrorBoundaryState {
    hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.log(error,  errorInfo)
    }

    render() {
        const { children } = this.props;
        const { hasError } = this.state;

        if(hasError) {
            return <Suspense fallback={''}>
                <ErrorPage/>
            </Suspense>;
        }

        return children;
    }
}

export default ErrorBoundary;