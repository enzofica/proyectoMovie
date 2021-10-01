import React from "react";

import "./Movie.scss"

function Movie(props){
    const {
        movie: {id, backdrop_path, title, overview},
    } = props;
    const backdropPath = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
    return (
        
        <div
            className="movie"
            style={{backgroundImage: `url('${backdropPath}')`}}
        >
           <div className="movieInfo">
               <div>
                   <h2>{title}</h2>
                   <p>{overview}</p>
               </div>
           </div>
        </div>
    )
}

export default Movie;