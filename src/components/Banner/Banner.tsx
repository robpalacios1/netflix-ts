import React, { useState, useEffect } from 'react'
import './Banner.css';
import instance_netflix from '../../axios';
import {request} from '../../config';

export interface BannerProps {
    
}

function truncate(str: any, n: any) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
}

const Banner : React.SFC<BannerProps> = () => {
    const [movie, setMovie] = useState<any>([]);
    useEffect(() => {
        const fetchData = async () => {
            const request_= await instance_netflix.get(request.fetchNetflixOriginals);
            const number = Math.floor(Math.random() * request_.data.results.length - 1);
            const selected_movie = request_.data.results[number];
            console.log(number);
            setMovie(selected_movie);
        }


        fetchData();
    }, []);
  
    console.log(`https://image.tmdb.org/t/p/original${movie?.backdrop_path}`);
    return (
        <header className="banner"
        style={{
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(
          'https://image.tmdb.org/t/p/original${movie?.backdrop_path}'
          )`,
          backgroundPosition: "center center"
        }}
      >
        <div className="banner_contents">
            <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
            </h1>
  
            <div className="banner_buttons">
                <button className="banner_button">Play</button>
                <button className="banner_button">My List</button>
            </div>

            <h1 className="banner_description">{truncate(movie?.overview, 200)}</h1>
            
        </div>
        <div className="banner--fadeBottom"/>
      </header>
    );
}
export default Banner;
