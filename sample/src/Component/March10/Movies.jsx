import React from "react";

function Movies(props) {
    // console.log('I have props',props);
    let { movies } = props;
    // console.log(obj);

    let data = movies.map((value) => {
        return (
            <div className="movie-container">

                <div className="movie-text">
                    <h1>{value.name}</h1>
                    <p>{value.about}</p>
                </div>

                <div>
                    <img className="movie-image" src={value.imageUrl} alt={value.name}  />
                </div>
            </div>

        )
    })

    return (
        <div>
            {data}
        </div>
    )
}

export default Movies;