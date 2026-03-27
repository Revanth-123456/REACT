import React from "react";

function Ipl(props){

    const{name,handle}=props;
    return(
        <>
        <h1>Hello {props.name}</h1>
        <button onClick={()=>handle("Ee sala cup namde")}>Button</button>

        </>
    );
}

export default Ipl;