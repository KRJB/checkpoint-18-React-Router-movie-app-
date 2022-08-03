import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navi from './components/Navi';
import MovieList from './components/MovieList';
import { useState } from 'react';
import { Data } from './components/Data';
import  {Trailer}  from './components/Trailer';
import { Route, Routes } from 'react-router-dom';


function App() {
  const [movies,setMovies]=useState(Data);
  const[rateSearching,setRateSearching]=useState(0);
  const [search,setSearch]=useState("");
  return (
  <div>

<Routes>
<Route  path="/" element={


  <div>
<Navi setSearch={setSearch} rateSearching={rateSearching} setRateSearching={setRateSearching}  setMovies={setMovies} movies={movies}/>
<MovieList movies={movies} rateSearching={rateSearching} search={search}/>
  </div> }/>



<Route path="/:id" element={<Trailer movies={movies}/>} />
</Routes>
  </div>
  )
}

export default App;