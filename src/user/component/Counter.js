import React, { useState } from 'react';
// import React from 'react';

function Counter(props) {

    const [count, setCount] = useState(0);

    const handlecount = () => {
        if (count < 5) {
            setCount(count + 1);
        }
    }




    const handlecount1 = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    }

    return (

        <>
        
        <h1>Function Component</h1>
        
            
            <button onClick={handlecount}>
                +++++
            </button>
            <p>You clicked {count} times</p>
            <p>
                <button onClick={handlecount1}>
                    -----
                </button>
            </p>
        </>


    );
}

export default Counter;

