import React, {useEffect, useState} from 'react'
import instance_netflix from '../../axios';
import YouTube from 'react-youtube';
import movieTrailer from 'movie-trailer';

import './Row.css';

const base_url = "https://image.tmdb.org/t/p/original"

// const Row : React.FC<RowProps> = (props) => {

    const Row  = (props) => {
    const {url, isLarge} = props;

    // const [movies, setMovies] = useState<any[]>([]);
    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");
    useEffect(() => { //fetching data can be donde in redux
        const fetchData = async () => {
            const request =  await instance_netflix.get(url);
            //setMovies(request).. data.results
            //original_name, genre_ids, name, popularity, origin_country
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [url]);
    const opts = {
        height: "390",
        width: "99%",
        playerVars: {
        autoplay: 0,
        }
    }
    const movieHandler = (movie) => {
        if(trailerUrl){
            setTrailerUrl("");
        } else {
            movieTrailer(movie?.title || "")
            .then(url => {
              const Params = new URLSearchParams(new URL(url).search);
              setTrailerUrl(Params.get('v'));
            }).catch((error) => console.log(error));

        }
    }

    //make request
    return (
        <div className="row">
            <h2>{props.title}</h2>

            <div className="row__posters">
                {
                    movies.map((movie) => {
                        return <img
                        key={movie.id}
                        onClick={()=> movieHandler(movie)}
                        className={`row__poster ${isLarge && "row__posterLarge"}`}
                        src={`${base_url}${isLarge ? movie.poster_path : movie.backdrop_path}`}
                        alt={movie.title}></img>
                    })
                }
            </div>
            {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
        </div>

    );
}

export default Row ;
