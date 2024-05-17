import { useEffect, useState } from "react";
import MovieCard from "../Components/MovieCard/MovieCard";

function Movies() {

    const [movies, setMovies] = useState([])

    useEffect(() => {
        fetch('https://api.themoviedb.org/3/movie/popular?api_key=50e0de079920a09199bb9b393b435ab9&language=pt-BR&page=1&region=BR')
        .then(response => response.json())
        .then(response => setMovies(response.results))
        .catch(err => console.log(err))
    }, [])

    return (  
        <>
        <h1>Movies</h1>
        <div className="grid grid-cols-3">
            {movies.map((filme, index) => (
                <MovieCard filme={filme} key={filme.id}/>
            ))}
        </div>
        </>
        
    );
}

export default Movies;