import React, { Component } from 'react';

// state : It is an Object that storeb informantion /data of particluar informantion

class City extends Component {
    constructor(props) {
        super(props);
        this.state = {
            cityName: 'Surat',
            population: '98.7 lakh'
        }
    }

    handlecity = () => {
        this.setState({ cityName: 'Delhi', population: '1.2 million' })
    }

    render() {
        return (
            <>
                <div>
                    City
                </div>
                <p>
                    My City is Surat
                </p>
                <h2>{this.state.cityName}</h2>
                <p>{this.state.population}</p>
                <button onClick={this.handlecity}>Change City</button>
            </>

        );
    }
}

export default City;