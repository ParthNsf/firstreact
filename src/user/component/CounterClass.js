import React, { Component } from 'react';

class CounterClass extends Component {
    constructor(props) {
        super(props);

        this.state = {
            count: 0
        }
    }

    handleinc = () => {
        this.setState({ count: this.state.count + 1})
    }

    handleDic = () => {
        this.setState({ count: this.state.count - 1})
        
    }

    render() {
        return (
            <>
                <div>
                    <h1>Class Component</h1>
                <button onClick={this.handleinc} disabled = {this.state.count < 5 ? false : true}>++</button>
                <h2>{this.state.count}</h2>
                <button onClick={this.handleDic} disabled = {this.state.count === 0 ? true : false}>--</button>

                </div>
            </>

        );
    }
}

export default CounterClass;