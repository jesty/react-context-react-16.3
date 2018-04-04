import React, { Component } from 'react';

class Child extends Component {
 
  happy = () => this.props.onChangeStatus("happy :D")
  sad = () => this.props.onChangeStatus("sad :(")

  render() {
    return (
    <div>
      <button onClick={this.happy}>Happy</button>
      <button onClick={this.sad}>Sad</button>
    </div>
    );
  }
}

export default Child;
