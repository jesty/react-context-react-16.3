import React, { Component } from 'react';
import {MainContext} from './Context';

class Child extends Component {

  happy = main => main.onChangeStatus("happy :D")
  sad = main => main.onChangeStatus("sad :(")

  render() {
    return (
    	<MainContext.Consumer>
		    {main => <div>
		      <button onClick={() => this.happy(main)}>Happy</button>
		      <button onClick={() => this.sad(main)}>Sad</button>
		    </div>}
		</MainContext.Consumer>
    );
  }
}

export default Child;
