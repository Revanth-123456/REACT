import React from "react";


function Payment() {

    const handleClick = () => {
        alert("say hi");
    };



    return (
        <div>
            <h1>Payment code</h1>
            <button onClick={handleClick}>Button</button>
        </div>
    )
}


export default Payment;