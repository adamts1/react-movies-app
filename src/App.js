import {useState,useEffect} from "react";
import ActorsPage from '../src/pages/Actors/ActorsPage';
import MoviesPage from '../src/pages/movies/MoviesPage';
import HomePag from '../src/pages/Main/HomePage';
import ActorsModel from '../src/model/ActorsModel';
import ActorDetails from './pages/ActorDetails/AactorDetails';
import Footer from './components/Footer/Footer'
import NavBar from './components/NavBar/NavBar'
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

import { HashRouter, Route, Switch } from "react-router-dom";



function App() {
  const [actors, setActors] = useState([]);
  // Get Data 
  useEffect(()=>{
    axios.get(process.env.PUBLIC_URL+'/actors.json')
    .then(response => {
      setActors(response.data.map(currentActor => new ActorsModel(currentActor.firstName, currentActor.lastName, currentActor.birthYear, currentActor.img, currentActor.link)))        
    }) },[])

  return (
    <div className='App'>
      <HashRouter>
        <NavBar/>
        <Switch >
          <Route exact path="/"><HomePag/></Route>
          <Route exact path="/actors"><ActorsPage {...actors}/></Route>
          <Route exact path="/actors/:index"><ActorDetails actors={actors}/></Route>
          <Route exact path="/movies"><MoviesPage/></Route>
        </Switch>
        <Footer/>
      </HashRouter>
    </div>
  ); 
}

export default App;