import React, { Component } from 'react';
import Card from '../../component/card/Card';

const doctordata = [
    {
        id: 1,
        name: "Dr. John Doe",
        speciality: "Cardiologist",
        phoneNumber: "(03)",
        email: "john@doctor"
    },
    {
        id: 2,
        name: "Dr. meert",
        speciality: "Cardiologist",
        phoneNumber: "(03)",
        email: "john@doctor"
    },
    {
        id: 3,
        name: "Dr.gimmy",
        speciality: "Cardiologist",
        phoneNumber: "(03)",
        email: "john@doctor"
    },
    {
        id: 4,
        name: "Dr. Nelson",
        speciality: "Cardiologist",
        phoneNumber: "(03)",
        email: "john@doctor"
    },

]

class Doctors extends Component {



    render() {
        return (
            <div>
                {
                    doctordata.map((v,i) => (
                        <Card data={v}/>
                    ))
                }
            </div>
        );
    }
}

export default Doctors;