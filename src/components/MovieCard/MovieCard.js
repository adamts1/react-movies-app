import React from 'react';
import { Card } from 'react-bootstrap';
import './MovieCard.css'

function MovieCard({ movie }) {
    console.log(movie.pic)
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={movie.pic} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                        {movie.overview}
                    </Card.Text>
                </Card.Body>
                <Card.Footer className="text-muted">{movie.popularity}</Card.Footer>
            </Card>
        </div>
    );
}

export default MovieCard;