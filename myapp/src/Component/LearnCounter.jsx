import React, { useState } from "react";

function LearnCounter(){

    const [count,setCount]=useState(0);

    const handleClick=()=>{
        setCount(count+1);
    };

    const handleHi=()=>{
        setCount(count-1);
    };

    return(
        <>
            <h1>Count:{count}</h1>
            <button onClick={handleClick}>Counter</button>
            <button onClick={handleHi}>Dislike</button>

        </>
    );
}

export default LearnCounter;