import React from 'react';
import Page2 from './Page2'


export default React.createClass({
  getInitialState: function(){
    return{
      showPage2: true
    }
  },
  handleClick: function (){
    this.setState({
      showPage2: false
    })
  },
  render: function() {
    return (
      <div>
        <h1 id="foo" className="bar" onClick={this.handleClick}>This is my first component</h1>
        <h2>This is still my first component</h2>
        <h3>This is an h3</h3>
        {this.state.showPage2 ? <Page2 count={3} foo="bar"/> : ''}
        {this.props.children}
      </div>
    )
  }
})

