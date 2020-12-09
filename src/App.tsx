import React from 'react';
import './App.css';
import Row from './components/Row/Row';
import {request} from './config';
import Banner from './components/Banner/Banner';
import NavBar from './components/NavBar/NavBar';

const App = () => {
  return (
    <div className="app">
      {/** NavBar */}
      <NavBar/>
      <Banner/>
      <Row
        title="NETFLIX ORIGINALS"
        url={request.fetchNetflixOriginals}
        isLarge={true}
      />
      <Row
        title="Trending Now"
        url={request.fetchTrending}
        isLarge={false}
      />
      <Row
        title="Top Rated"
        url={request.fetchTopRated}
        isLarge={false}
      />
      <Row
        title="Action Movies"
        url={request.fetchActionMovies}
        isLarge={false}
      />
      <Row
        title="Comedy Movies"
        url={request.fetchComedyMovies}
        isLarge={false}
      />
      <Row
        title="Romance Movie"
        url={request.fetchRomanceMovie}
        isLarge={false}
      />
      <Row
       title="Documentaries"
        url={request.fetchDocumentaries}
        isLarge={false}
      />
    </div>
  );
}

export default App;