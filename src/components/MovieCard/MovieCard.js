import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './MovieCard.css'

function MovieCard({ movie }) {
    return (
        <div>
            <Card className='c-moviecard'>
                <Row>      
                 <Col xs={4} md={4} lg={3}>
                <Card.Img variant="top" src={movie.pic} />
                </Col>   
                <Col>
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Title>{movie.director}</Card.Title>
                    <Card.Text>
                        {movie.overview}
                    </Card.Text>
                    <Card.Title>{movie.popularity}</Card.Title>
                </Card.Body>
                </Col>
                
                </Row>
            </Card>
        </div>
    );
}

export default MovieCard;