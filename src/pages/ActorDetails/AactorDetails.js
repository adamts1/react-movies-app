import React, { useEffect } from 'react';
import { Container, Spinner } from 'react-bootstrap';
import { useParams } from 'react-router';
import axios from 'axios';

function ActorDetails({actors}) {
    const {index} = useParams();


    return (
        <div>
            <Container>
            {actors ? 
                    <>
                    <p>Name: {actors[index].firstName + " "+actors[index].lastName}</p>
                    </> : <Spinner/>
            }
            </Container>
        </div>
    );
}

export default ActorDetails