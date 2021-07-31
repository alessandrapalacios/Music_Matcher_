import React from 'react';
// import Form from "react-bootstrap/Form"
// import Nav from "react-bootstrap/Nav"
// import Button from "react-bootstrap/Button"
import Navbar from "react-bootstrap/Navbar"
import logo from "../imgs/Picture2.png"
import { Link } from 'react-router-dom';

const NavigationBar = () => {
   return (
      <div>
         <Navbar className="navbar" >
            {/* <Link to="/"> */}
            <img className="imgfluid" src={logo} alt="Logo" />
             {/* </Link> */}
              
              {/* <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                </Nav> */}
                {/* <Form inline className="actions">
                  <Nav.Link href="#link"  id="login"> Log In </Nav.Link>
                  <Button variant="outline-success"> Register </Button>
                </Form> */}
              {/* </Navbar.Collapse> */}
          </Navbar>
            
      </div>
   );
};

export default NavigationBar;