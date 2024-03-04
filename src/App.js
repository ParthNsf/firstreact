
import './App.css';
import ExampleLifeCycle from './user/containers/LifeCycleMethods/ExampleLifeCycle';
import React, { Component } from 'react'

export default class App extends Component {
  constructor(){
    super()

    this.state ={
      mount : true,
      ignoreprop : 0,
      score: 10
    }


    this.MountCount = () => {
      this.setState({mount : true})
    }

    this.UnMountCount = () => {
      this.setState({mount : false})
    }

    this.ignoreprop = () => {
      this.setState({ignoreprop: Math.random()})
    }

    this.scoresender = () => {
      this.setState({score: Number.parseInt(Math.random()* 10)})
    }
  }
  render() {
    return (
      <div><>
        <button style={{padding: 50, margin: 15}} onClick={this.MountCount} disabled = {this.state.mount}>Mount Count Enable</button>
        <button onClick={this.UnMountCount} disabled = {!this.state.mount}>Mount Count Desable</button>
        <button onClick={this.ignoreprop}>Ignore Prop</button>
        <button onClick={this.scoresender}>Score Send</button>
        {this.state.mount ? <ExampleLifeCycle
        ignoreprop = {this.state.ignoreprop}
        score={this.state.score}
        /> : null }
      </>
      
         
      </div>
    )
  }
}

