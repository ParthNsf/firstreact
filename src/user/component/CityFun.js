import React, { useState } from 'react';

function CityFun(props) {
 // Declare a new state variable, which we'll call "count"
 const [CityName, setCityname] = useState('Surat');
 const [Citypopluation, setPolpuation] = useState(182);

 const handlecity = () => {
   setCityname('Delhi');
   setPolpuation(78);
 }

 return (
   <div>
    <h1>Function based component</h1>
    <h2>City Name : {CityName}</h2> <h2>City Population : {Citypopluation}</h2>
     <p>You clicked times</p>
     <button onClick={handlecity}>
       Click me
     </button>
   </div>
 );
}

export default CityFun;