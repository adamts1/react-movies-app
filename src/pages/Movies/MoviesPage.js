import React, { useState } from 'react';
import './MoviesPage.css';
import SearchBox from '../../components/SearchBox/SearchBox';
import MovieModel from '../../model/MovieModel';
import MovieCard from '../../components/MovieCard/MovieCard'
import axios from 'axios';
import { Container, Row, Col } from 'react-bootstrap';



function MoviesPage() {
    const [movies, setMovies] = useState([]);
    const [searchInput, setSearchInput] = useState("")
    const [results, setResults] = useState([])
    function searchInputWarper(newSearchText) {
        setSearchInput(newSearchText);
        if (newSearchText) {
            // Here we should call TMDB
            const searchURL = "http://api.themoviedb.org/3/search/movie?api_key=9637e8ca63c566befcabb9f7fc353c29&query=" + newSearchText;
            axios.get(searchURL).then(response => {
                setResults(response.data.results);
            });
        } else {
            setResults([]);
        }
    }

function addMovie(resultIndex) {
    console.log(results[resultIndex].id)
    const credit =  axios.get("https://api.themoviedb.org/3/movie/"+results[resultIndex].id+"/credits?api_key=9637e8ca63c566befcabb9f7fc353c29&query&language=en-US");
    const details = axios.get("https://api.themoviedb.org/3/movie/"+results[resultIndex].id+"?api_key=9637e8ca63c566befcabb9f7fc353c29&language=en-US");

    Promise.all([credit, details]).then((response) => {
        console.log(response[0].data.crew[0].name);
        setMovies(movies.concat(new MovieModel(results[resultIndex].title, response[0].data.crew[0].name, results[resultIndex].release_date, results[resultIndex].overview, results[resultIndex].popularity, results[resultIndex].poster_path)));


      });
    
    setResults([]);
    setSearchInput("");
}

    return (
        <div className="c-movies">
            <Container>
                <SearchBox 
                    onChange={searchInputWarper} 
                    onSelectedResult={addMovie}
                    results={results}
                    searchInput={searchInput}
                />
                <Row>
                    {movies.map(movie => <Col lg={12} ><MovieCard movie={movie}/></Col>)}
                </Row>
            </Container>
        </div>
    );
}

export default MoviesPage;