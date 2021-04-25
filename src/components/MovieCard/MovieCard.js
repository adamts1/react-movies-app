import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';
import './MovieCard.css'

function MovieCard({ movie }) {
    return (
        <div>
            <Card className='c-moviecard'>
                <Row>      
                 <Col>
                <Card.Img variant="top" src={movie.pic} />
                </Col>   
                <Col>
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>
                        {movie.overview}
                    </Card.Text>
                </Card.Body>
                </Col>
                <Card.Footer className="text-muted">{movie.popularity}</Card.Footer>
                </Row>
            </Card>
        </div>
    );
}

export default MovieCard;