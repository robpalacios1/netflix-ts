import React, {useEffect, useState} from 'react'
import instance_netflix from '../../axios';

import './Row.css';

export interface RowProps {
      title: string;
      url: string;
}

const base_url

const Row : React.FC<RowProps> = (props) => {
    
    const [movies, setMovies] = useState<any[]>([]);
    useEffect(() => { //fetching data can be donde in redux
        
        const fetchData = async () => {
            const request: any =  await instance_netflix.get(props.url);
            //setMovies(request).. data.results
            //original_name, genre_ids, name, popularity, origin_country
            setMovies(request.data.results);
            return request;
        }
        fetchData();
    }, [props.url]);

    //make request
    return (  
        <div className="row">
            <h2>{props.title}</h2>
            
            <div className="row__posters"></div>
            {
                movies.map((movie: any) => {
                    console.log(movie)
                    return <img src={`${base_url}${movie.poster_path}`} alt={movie.title}></img>
        
                })
            }

        </div>

    );
}
 
export default Row ;
