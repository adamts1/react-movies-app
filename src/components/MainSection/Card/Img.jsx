import React, { useState} from 'react';
import { Redirect } from "react-router-dom";
import { Image} from 'react-bootstrap';



function Img(props) {
    const [redirectTo, setRedirectTo] = useState();

    if (redirectTo !== undefined) {
        return <Redirect to={'/actors/' + redirectTo}/>
    }

    return (
        <div>
           <Image src={process.env.PUBLIC_URL + '/' +props.pic} alt="" onClick={()=>setRedirectTo(props.index)}   />
        </div>
    )
}

export default Img;