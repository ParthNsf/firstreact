
import './App.css';
import React, { Component } from 'react'
import Header from './user/component/Header/Header'
import { Route, Routes } from 'react-router';
import Home from './user/containers/Home/Home'
import Products from './user/containers/Products/Products';
import Contact from './user/containers/Contact/Contact';

export default class App extends Component {
  
  render() {
    return (
      <div>
        <Header/>
        <Routes>
          <Route exact path='/' element={<Home/>}/>
          <Route exact path='/Product' element={<Products/>}/>
          <Route exact path='/Contact' element={<Contact/>}/>

      
     
        </Routes>
      </div>
    )
  }
}

