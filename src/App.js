import {useState,useEffect} from "react";
import ActorsPage from '../src/pages/Actors/ActorsPage';
import MoviesPage from '../src/pages/movies/MoviesPage';
import ActorsModel from '../src/model/ActorsModel';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    <div>
      <HashRouter>
        <Switch>
          <Route exact path="/actors"><ActorsPage {...actors}/></Route>
          <Route exact path="/movies"><MoviesPage/></Route>
        </Switch>
      </HashRouter>
    </div>
  ); 
}

export default App;