
import './App.css';
// import ExampleLifeCycle from './user/containers/LifeCycleMethods/ExampleLifeCycle';
import React, { Component } from 'react'
import Timer from './user/containers/Timer/Timer';
import FunTimer from './user/containers/Timer/FunTimer';

export default class App extends Component {
  
  render() {
    return (
      <div><>
        <Timer/>
        <FunTimer/>
      </>
      </div>
    )
  }
}

