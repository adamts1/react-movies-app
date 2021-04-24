import React from 'react';
import Img from '../Card/Img'
import TextContent from '../Card/TextContent'
import './Card.css'



function Card(props) {


    


    return (
        <div className="Card">
           <Img pic={props.pic}/>
           <TextContent imdb={props.imdb} actorName={props.firstName +" "+props.lastName} birthDate={props.birthDate}/>
        </div>
    )
}

export default Card;
