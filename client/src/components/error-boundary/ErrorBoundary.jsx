import { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasError: false,
            message: '',
        };
    };

    static getDerivedStateFromError(err) {
        console.log('GetDerivedStateFromError');
        return {
            hasError: true,
            message: err.message
        };
    };

    render() {
        if (this.state.hasError) {
            return < h1
                className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl flex items-center justify-center h-screen"
            > {this.state.message}
            </h1>
        }
        return this.props.children;
    }
}