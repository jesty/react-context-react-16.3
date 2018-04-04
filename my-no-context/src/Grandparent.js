import React, { Component } from 'react';
import Parent from './Parent';

class Grandparent extends Component {
  state = {status: "..."};

  handleChangeStatus = (status) => this.setState({status});

  render() {
  	let {status} = this.state;
    return (
      <div>
        I am {status}
        <Parent onChangeStatus={this.handleChangeStatus} />
      </div>
    );
  }
}

export default Grandparent;
