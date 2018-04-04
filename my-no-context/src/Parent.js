import React, { Component } from 'react';
import Child from './Child';

class Parent extends Component {
  render() {
  	let {onChangeStatus} = this.props;
    return (
      <Child onChangeStatus={onChangeStatus} /> 
    );
  }
}

export default Parent;
