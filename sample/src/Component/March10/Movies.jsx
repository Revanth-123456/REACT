import React from "react";

function Movies(props) {
    // console.log('I have props',props);
    let { movies } = props;
    // console.log(obj);

    let data = movies.map((value) => {
        return (
            <div className="">

                <div>
                    <img src={value.imageUrl} alt={value.name}  style={{ width: "100vw", height: "100vh", objectFit: "cover" }} />
                </div>
            </div>

        )
    })

    return (
        <div>
            {data}
            {/* <h1>My name is {props.firstname}</h1> */}
        </div>
    )
}

export default Movies;