
import './App.css';
// import ExampleLifeCycle from './user/containers/LifeCycleMethods/ExampleLifeCycle';
import React, { Component } from 'react'
// import Timer from './user/containers/Timer/Timer';
import Product from './user/containers/Products/image/Products';
import 'bootstrap/dist/css/bootstrap.min.css';

export default class App extends Component {
  
  render() {
    return (
      <div><>
        {/* <Timer/> */}
        <Product/>
      </>
      </div>
    )
  }
}

