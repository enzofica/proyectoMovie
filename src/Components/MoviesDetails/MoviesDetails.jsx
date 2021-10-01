import React, {useState, useEffect} from "react";
import { useParams } from "react-router-dom";
import Loading from "../Loading/Loading";
import {Col, Row} from "antd";
import "./MoviesDetails.scss";
import { ItalicOutlined } from "@ant-design/icons";

export default function MoviesDetails(props) {
    const {id} = useParams();
    
    const [movieInfo, setMovieInfo] = useState([]);

    useEffect(() => {
        obtenerDatos();
    }, []);

    const obtenerDatos = async () => {
        console.log("Paso por aca");
        const response = await fetch(
            `https://api.themoviedb.org/3/movie/${id}?api_key=d896e8ee95db1320e65111f06a2c925b&language=es-ES&page=1`
        );
        const movie = await response.json();
        setMovieInfo(movie);

        console.log(`https://api.themoviedb.org/3/movie/${id}?api_key=d896e8ee95db1320e65111f06a2c925b&language=es-ES&page=1`);

        console.log("hola", movieInfo);
    };

    if(!movieInfo.genres){
        return <Loading />
    }
    console.log(movieInfo);

    //movieInfo.loading || !movieInfo.genres

    return <RenderMovie movieInfo={movieInfo}/>
}

function RenderMovie(props) {
    const { movieInfo: { backdrop_path, poster_path}, } = props;
    
    const backdropPath = `https://image.tmdb.org/t/p/w500${backdrop_path}`;
    return (
            <div
            className="imgDetails"
            style={{ backgroundImage: `url('${backdropPath}')` }}
            >
             <Row>
                <Col span={8} offset={3} >
                    <PosterMovie image={poster_path} />
                </Col>     
            </Row>      
            </div>)
}

function PosterMovie(props) {
    const { image } = props;
    const posterPath = `https://image.tmdb.org/t/p/w500${image}`;

    return (<div className="imgPosther"
            style={{ backgroundImage: `url('${posterPath}')` }} 
            >
        <p></p>
    </div>)
}