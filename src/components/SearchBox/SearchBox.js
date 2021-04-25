import React from 'react';
import { Form, ListGroup } from 'react-bootstrap';


function SearchBox({onChange, searchInput ,results, onSelectedResult}) {
    return (
        <div className="c-searchbox">
            <Form.Control type="text" placeholder="placeholder" value={searchInput} onChange={e => onChange(e.target.value)}/>
             <ListGroup className="result-box">
                {results.map((result, index) => 
                    <ListGroup.Item action onClick={() => onSelectedResult(index)} >
                        {result.title}
                    </ListGroup.Item>)}
            </ListGroup>
           
       
        </div>
    );



}

export default SearchBox;