import { DropdownButton, Dropdown, Navbar, Form, FormControl } from 'react-bootstrap';
import { useMediaQuery } from 'react-responsive';
import React from 'react';
import './ActorNavbar.css'


const ActorNavbar=({onChange, onSelect, sortBy})=>{
    const smallScreen = useMediaQuery({ maxWidth: 1000 })
    if (smallScreen) {
        var myStyle = {
            width: "200px",
        }
    } else {
        var myStyle = {

            width: "800px"
        }
    }

 

    return(<div>
            <Navbar bg="light" expand="lg">
                <Navbar.Brand href="#home">Find Movie Star</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form className="mx-auto" inline>
                        <FormControl style={myStyle} type="text" placeholder="Search" className="mr-sm-2" onChange={onChange} />
                        <DropdownButton  id="dropdown-basic-button" onSelect={onSelect} title={sortBy} >
                            <Dropdown.Item eventKey="firstName">First Name</Dropdown.Item>
                            <Dropdown.Item eventKey="lastName">Last Name</Dropdown.Item>
                            <Dropdown.Item eventKey="year">Age</Dropdown.Item>
                        </DropdownButton>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
            </div>)
}
export default ActorNavbar;

