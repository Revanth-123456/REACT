import React from "react";

function Sample(props) {
    // console.log('I have props',props);
    let { obj } = props;
    // console.log(obj);

    // let data = obj.map((value) => {
    //     return (
    //         <div className="heading1">
    //             <h1>Name:{value.name}</h1>
    //             <h1>Employer:{value.employer}</h1>
    //         </div>
    //     )
    // })

    return (
        <div>
            {/* {data} */}
            <h1>My name is {props.firstname}</h1>
        </div>
    )
}

export default Sample;