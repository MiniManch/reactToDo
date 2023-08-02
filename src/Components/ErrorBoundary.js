import { Component } from 'react';
import TodoForm from './TodoForm';

export default class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error: error };
  }

  componentDidCatch(error, info) {
    console.log(error, info);
    this.setState({ hasError: error, error: info });
  }

  render() {
    if (this.state.hasError) {
      return(<h1>{this.state.hasError.message}</h1>)
    }
    return this.props.children;
  }
}
