
export const config_api = {
   key: "d366ccc74a292183ff19ff088b54d1f7"
   
}

// Your web app's Firebase configuration
export const  firebaseConfig = {
    apiKey: "AIzaSyAcTISQe4SHebN4qwFVmQXV9zYwn7O4gi4",
    authDomain: "netflix-clone-e4bd0.firebaseapp.com",
    projectId: "netflix-clone-e4bd0",
    storageBucket: "netflix-clone-e4bd0.appspot.com",
    messagingSenderId: "937355082334",
    appId: "1:937355082334:web:795fd2d08aac89a21892cf"
  };

//requests
export const request = {
    fetchTrending: `/trending/all/week?api_key=${config_api.key}&language=en-US`,
    fetchNetflixOriginals: `/dicover/tv?api_key=${config_api.key}&with_network=213`,
    fetchTopRated: `/movie/top_rated?api_key=${config_api.key}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${config_api.key}&with_genres=28`,
    fetchComedyMovies:`/discover/movie?api_key=${config_api.key}&with_genres=35`,
    fetchHorrorMovies:`/discover/movie?api_key=${config_api.key}&with_genres=27`,
    fetchRomanceMovie:`/discover/movie?api_key=${config_api.key}&with_genres=10749`,
    fetchDocumentaries:`/discover/movie?api_key=${config_api.key}&with_genres=99`,
}



