'use client';

import React, { Component, ErrorInfo, ReactNode } from 'react';

/** Props for the ErrorBoundary component. */
interface ErrorBoundaryProps {
    children: ReactNode;
    /** Optional fallback UI when an error occurs. */
    fallback?: ReactNode;
    /** Section name shown in the default error message. */
    sectionName?: string;
}

/** State tracking whether an error has been caught. */
interface ErrorBoundaryState {
    hasError: boolean;
    error: Error | null;
}

/**
 * React Error Boundary — catches rendering errors in child components
 * and displays a graceful fallback instead of a white screen.
 */
export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
    constructor(props: ErrorBoundaryProps) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error: Error): ErrorBoundaryState {
        return { hasError: true, error };
    }

    componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
        // Log the error for debugging (swap for Sentry/LogRocket in production)
        console.error(
            `[ErrorBoundary${this.props.sectionName ? ` — ${this.props.sectionName}` : ''}]`,
            error,
            errorInfo.componentStack
        );
    }

    private handleRetry = (): void => {
        this.setState({ hasError: false, error: null });
    };

    render(): ReactNode {
        if (this.state.hasError) {
            // Custom fallback if provided
            if (this.props.fallback) return this.props.fallback;

            // Default Arabic error UI
            return (
                <div className="w-full py-12 px-6 text-center" role="alert">
                    <div className="glass-card max-w-md mx-auto p-8">
                        <div className="text-4xl mb-4">⚠️</div>
                        <h3 className="text-lg font-bold text-[var(--color-text)] mb-2">
                            عذراً، حدث خطأ {this.props.sectionName ? `في ${this.props.sectionName}` : 'في هذا القسم'}
                        </h3>
                        <p className="text-sm text-[var(--color-text-muted)] mb-6">
                            لا تقلقي — باقي الموقع يعمل بشكل طبيعي.
                        </p>
                        <button
                            onClick={this.handleRetry}
                            className="btn-cta text-sm !py-2.5 !px-6"
                        >
                            حاولي مرة أخرى
                        </button>
                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}
