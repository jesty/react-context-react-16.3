import React, { Component } from 'react';
import Parent from './Parent';
import {MainContext} from './Context';

class Grandparent extends Component {
  state = {status: "..."};

  handleChangeStatus = (status) => this.setState({status});

  render() {
  	let {status} = this.state;
    return (
      <MainContext.Provider value={{onChangeStatus: this.handleChangeStatus}}>
        I am {status}
        <Parent />
      </MainContext.Provider>
    );
  }
}

export default Grandparent;
