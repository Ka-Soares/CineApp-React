import { useEffect,  useState } from "react";
import { useParams } from "react-router-dom";

function MovieDetails() {

    const {id} = useParams();
    const [movie, setMovie] = useState({})

    useEffect(() => {
        fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=50e0de079920a09199bb9b393b435ab9&language=pt-BR&page=1&region=BR`)
        .then(response => response.json())
        .then(response => setMovie(response))
        .catch(err => console.log(err))
    }, [])

    return (
        <>
        <h1>Movie Page</h1>
        <p>{movie.title}</p>
        </>
    );
}

export default MovieDetails;