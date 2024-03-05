import React, { Component } from 'react';
import style from './Timer.module.css'

class Timer extends Component {

    //1.It is used to initialize the state value or binding methods
    constructor(props) {
        super(props);
        this.state = { 
            time: new Date()
        };
    }

    tick = () => {
        this.setState({time: new Date()})
    }

    //3.It is used to bind the methods with class
    componentDidMount(){
       console.log("Mounting");
       this.timeref = setInterval(this.tick, 1000);
    }
    componentDidUpdate(preProps, preState ){
        console.log("Updating");
        if (this.state.time !== preState.time) {
            console.log("Updated");
            console.log(this.state.time);
            console.log(preState.time);
            
        }
    }
    
    componentWillUnmount(){
        clearInterval(this.timeref);
    }
    

    //2. it is used display JSX in DOM it is called when any state or props are changed
    render() {
        return (
            <div className={style.container}>
                <h2 className={style.card}>Timer</h2>
                <></>

                <h3 className={style.timer}>{this.state.time.toLocaleTimeString()}</h3>
            </div>
        );
    }
}

export default Timer;