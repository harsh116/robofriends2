import React,{Component} from 'react';

class ErrorBoundary extends Component
{
	constructor(props)
	{
		super(props);
		this.state={
			hasError: false
		}
	}

	componentDidCatch(error,info)
	{
		this.setState({hasError: true});
	}

	render()
	{
		if(this.state.hasError===true)
			return <h1>Oops. There is an Error</h1>;
		else
			return this.props.children;
	}
}

export default ErrorBoundary;