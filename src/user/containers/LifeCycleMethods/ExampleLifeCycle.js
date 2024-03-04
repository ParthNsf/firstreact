import React, { Component } from "react";


// const CustomError = () => <div>{prop.ignore}</div>

export default class ExampleLifeCycle extends Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0,
      
      score: 0
    };
  }

  Increment = () => {
    this.setState({ counter: this.state.counter + 1 });
  };

  Decrement = () => {
    this.setState({ counter: this.state.counter - 1 });
  };

  static getDerivedStateFromProps(props, state){
    if (props.score && state.score !== props.score) {
        return{
            score: props.score,
            counter: props.score
        }
    }
    return null
  }

  getSnapshotBeforeUpdate(prevProps, prevState){
    console.log('Get Snapshot Before Update');
    console.log('_________');

    return null 
  }

  componentDidMount(){
    console.log('Did Mount');
    console.log('_________');
  }

  shouldComponentUpdate(nextProps, nextState){
    if (nextProps.ignoreProps && this.props.ignoreProps !== nextProps.ignoreProps) {
        console.log('Should Commponet Update - Do Not Render');
        return false
    }

    console.log('Should Commponet Update -  Render');
    return true

  }

  render() {
    console.log("Render");

    return (
        
      <div>
        <>
          <button onClick={this.Increment}>Increment</button>
          Counter:{this.state.counter}
          <button onClick={this.Decrement}>Decrement</button>
          {/* <CustomError/> */}
        </>
      </div>
    );
  }

  componentDidUpdate(prevPros, prevState, snapshot){
    console.log('Did Update');
    console.log('_________');

  }

  componentWillUnmount(){
    console.log('Did Unmount');
    console.log('_________');
  }

  componentDidCatch(error, info){
    console.log('Did Catch');
    console.log('_________');

  }
}
