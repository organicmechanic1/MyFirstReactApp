import React from 'react'

const MyComponent = React.createClass({
	getDefaultProps: function(){
		return {
			count: 10
		}
	},
	getInitialState: function () {
			return {
				count: this.props.count
			}
	},
	componentWillMount: function(){
		
		
	},

	componentDidMount: function(){

	},
	componentWillUnmount: function(){
			console.log("page2 unmount")
			clearInterval(this.intervalHandler)
	},
	foo: function() {
		this.intervalHandler = setInterval(function(){
			this.setState({
				count: this.state.count + 1
			})
		}.bind(this), 1000)
	},
	render: function () {
		return (
			<div onClick={this.foo}>
				<ul>
					<li>{this.props.foo}</li>
					<li>Two</li>
					<li>Three</li>
					<li>{this.state.count}</li>
				</ul>
			</div>
		)
	}
})

export default MyComponent