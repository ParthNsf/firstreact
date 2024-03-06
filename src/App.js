
import './App.css';
// import ExampleLifeCycle from './user/containers/LifeCycleMethods/ExampleLifeCycle';
import React, { Component } from 'react'
import Product from './user/containers/Products/Product';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Timer from './user/containers/Timer/Timer';
// import FunTimer from './user/containers/Timer/FunTimer';

export default class App extends Component {
  
  render() {
    return (
      <div><>
        {/* <Timer/>
        <FunTimer/> */}
        <Product/>
      </>
      </div>
    )
  }
}

