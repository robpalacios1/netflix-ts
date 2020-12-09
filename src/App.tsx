import React from 'react';
import './App.css';
import Row from './components/Row/Row';
import {request} from './config';

const App = () => {
  return (
    <div className="app">
      
      
    
      <Row title="NETFLIX ORIGINALS" url={request.fetchNetflixOriginals} />
      <Row title="Trending Now" url={request.fetchTrending} />
      <Row title="Top Rated" url={request.fetchTopRated} />
      <Row title="Action Movies" url={request.fetchActionMovies} />
      <Row title="Comedy Movies" url={request.fetchComedyMovies} />
      <Row title="Romance Movies" url={request.fetchRomanceMovie} />
      <Row title="Documentaries" url={request.fetchDocumentaries} />

      

    </div>
  );
}

export default App;