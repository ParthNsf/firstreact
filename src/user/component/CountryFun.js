import React, { useState} from 'react';

function CountryFun(props) {

    const[Countryname, setCountryName] = useState('India');
    const[TimeZone, setTimeZone] = useState('GMT + 5.30');

    const handlecountry = () => {
        setCountryName('USA');
        setTimeZone('GMT -5');
    }


    return (
      <div>
        <h1>Function based component</h1>
        <h2>Country Name : {Countryname}</h2>
        <h2>Time Zone : {TimeZone}</h2>
        <p>Change</p>
        <button onClick={handlecountry}>
          Click me
        </button>
      </div>
    );
}

export default CountryFun;

