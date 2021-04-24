import React from 'react';


function Img(props) {
    return (
        <div>
           <img src={process.env.PUBLIC_URL + '/' +props.pic} alt="" />
        </div>
    )
}

export default Img;