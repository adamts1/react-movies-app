import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './HomePage.css'

function HomePage(props) {
    return (
        <div className='c-homepage'>
            <Container>
                <h1 className="display-1">Holywood App</h1>
                <p>Amazing Holywood app!!</p>
                {/* <Button href="#/cars">Enter</Button> */}
                <Link className="btn btn-primary" to="/actors">Enter to Actor</Link>
                <Link className="btn btn-primary" to="/Movies">Enter to Movies</Link>
            </Container>
        </div>
    );
}

export default HomePage;