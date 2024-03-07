
import './App.css';
<<<<<<< HEAD
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
=======
import CityFunProp from './user/component/CityNameProps';
// import City from './user/component/City';
// import CityFun from './user/component/CityFun';
import Counter from './user/component/Counter';
import CounterClass from './user/component/CounterClass';
// import CountryFun from './user/component/CountryFun';
// import Country from './user/component/country';


function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>

      {/* <Country /> */}
      {/* <City />
      <CountryFun />
      <CityFun /> */}
    <Counter/>
<CounterClass/>      
<CityFunProp changeCityProp="Nevada" changeStateProp="Las Vegas"/>
    </>

  );
>>>>>>> 414ec50fdc77a93b6bcb8847b0ada5e4f0bd3e3a
}

