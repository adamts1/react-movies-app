import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePage.css'

function HomePage(props) {
    return (
        <div className='c-homepage'>
            <Container>
                <h1 className="display-1">Hollywood App</h1>
                <p>Amazing Hollywood app!!</p>

                <Link className="btn btn-primary" to="/actors">Enter to Actor</Link>
                <Link className="btn btn-primary" to="/Movies">Enter to Movies</Link>
            </Container>
        </div>
    );
}

export default HomePage;