import React, { Component } from 'react';

class Country extends Component {
    constructor(props) {
        super(props);
        
        this.state = {
            name: "India",
            timezone: "GMT + 5.30"
        }
    }
    handlecontry = () => {
        this.setState({name: "USA", timezone: "GMT - 5"})
    }
    
    render() {
        return (
            <>
                <div>
                    Country
                </div>
                <p>
                    My Country is India
                </p>
                <h2>{this.state.name}</h2>
                <p>{this.state.timezone}</p>
                <button onClick={this.handlecontry}>Change Country</button>
            </>
        );
    }
}

export default Country;