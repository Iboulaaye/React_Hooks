import React, {useEffect, useState} from 'react';
import './App.css';
import "bootstrap/dist/css/bootstrap.css";
import MovieList from './Components/Movielist';
import MoviesTitle from './Components/MoviesTitle';
import Search from './Components/Search';
import addFavorite from './Components/AddFavorite';




const App = () => {
  const [movies, setMovies] = useState([]);
  const [favourite, setFavourite] =  useState([]);
  const [searchValue, setSearchValue] = useState ('');
  

  const getMovieRequest = async (searchValue) => {
    const url = `http://www.omdbapi.com/?s=${searchValue}&apikey=fdbcc995`;

    const response =  await fetch(url);
    const responseJson = await response.json();

    if(responseJson.Search){
      setMovies(responseJson.Search);
    }
  };

  useEffect(() => {
    getMovieRequest(searchValue);
  }, [searchValue]);
 
  const addFavouriteMovie = (movie) =>{
      const newFavouriteList = [...favourite, movie];
      setFavourite(newFavouriteList);
  }


  return (
    <div className= 'container-fluid movie-app body'>
      <div className='row d-flex align-items-center  mb-4'>
      <MoviesTitle title="Movie"/>
      <Search searchValue ={searchValue} setSearchValue={setSearchValue}/>
      </div>
      <div className='row'>
        <MovieList 
        movies={movies} 
        handleFavouriteClick={addFavouriteMovie}
        favouriteComponent={addFavorite}/>
      </div>
      <div className='row d-flex align-items-center mt-4 mb-4'>
      <MoviesTitle title="Favourite"/>
      </div>
      <div className='row'>
        <MovieList 
        movies={favourite} 
        handleFavouriteClick={addFavouriteMovie}
        favouriteComponent={addFavorite}/>
      </div>
    </div>
  );
}

export default App;
