import React, { Component } from 'react';
export default class App extends Component {
  render() {
    console.log(this.props);
    return <div>
        {this.props.children}
    </div>;
  }
}
