import React from 'react';


function TextContent({imdb, actorName, birthDate}) {
    const myStyle = {
        marginTop: "20px"
    }

    return (
        <div style={myStyle}>
            <h2><a href={imdb}>{actorName} </a></h2>
            <h3>{birthDate}</h3>
        </div>
    )
}

export default TextContent;

