import React, { useState, useEffect } from "react";
import ListMovies from "../ListMovies/ListMovies";

export default function Home() {
    const [movieList, setMovieList] = useState([]);
  
    useEffect(() => {
      obtenerDatos();
    }, []);
  
    const obtenerDatos = async () => {
      const response = await fetch(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=d896e8ee95db1320e65111f06a2c925b&language=es-ES&page=1`
      );
      const movies = await response.json();
      setMovieList(movies);
    };
  
    return (
      <div className="home"> 
        <ListMovies movies={movieList} />
      </div>
    );
}
