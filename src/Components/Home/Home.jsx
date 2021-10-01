import React, { useState, useEffect } from "react";
import "./Home.scss";
import SliderMovies from "../SliderMovies/SliderMovies";


export default function Home() {
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    obtenerDatos();
  }, []);

  const obtenerDatos = async () => {
    const response = await fetch(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=d896e8ee95db1320e65111f06a2c925b&language=es-ES&page=1`
      );
    const movies = await response.json();
    setMovieList(movies);
  };

  return (
    <>
    <div className="home">

      <SliderMovies movies={movieList} />
      </div>
    </>
  );
}


