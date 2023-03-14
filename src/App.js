import React from 'react';
import axios from 'axios'
import {originals, Action , HorrorMovies, comedymovies,Documentaries,RomanceMovies,TrendingMovies} from './urls'
import './App.css';
import Navbar from './Components/Navbar';
import './Components/Navbar.css';
import Banner from './Components/Banner/Banner';
import './Components/Banner/Banner.css'
import Rowpost from './Components/Rowpost/Rowpost';
import './Components/Rowpost/Rowpost.css'
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Navbar/>
        <Banner/>
       <Rowpost url ={originals} title = 'Netflix Originals'/>
       <Rowpost url = {Action} title = 'Action' isSmall/>
       <Rowpost url = {HorrorMovies} title = 'Horror Movies' isSmall/>
       <Rowpost url = {comedymovies} title = 'Comdey Movies' isSmall/>
       <Rowpost url = {Documentaries} title = 'Documentaries' isSmall/>
       <Rowpost url = {RomanceMovies} title = 'Romance Movies' isSmall/>
       <Rowpost url = {TrendingMovies} title = 'Trending Movies' isSmall/>
   
      </header>
    </div>
  );
}

export default App;
