import React from "react";
import HOCComponent from "./HOCComponent";
import NormalComponent from "./NormalComponent";

function UpdatedComponent(props) {

    return (
        <>
        <NormalComponent name={props.name} />
        </>
    
    );
}

// export default HOCComponent(UpdatedComponent);
export default (UpdatedComponent);