import React from 'react'
import Testhome from './Testhome'
import { Card, Container, Button, Form, FormControl, Nav, Navbar, NavDropdown, Row,Col, NavbarBrand } from 'react-bootstrap'
import '../css/Testhomeback.css'
import background from "../Assests/images/pic1.jpg";

export const Testhomeback = () => {
  return (
      <>
    <Testhome/>  
    
    <div className='top' style={{ backgroundImage: `url(${background})` }}>

<Row>
    
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
&nbsp;
<Col>
<div className='words'>
    <br></br>
    <h1 style={{color:'white'}}>Lets Donate food </h1>
    <h1 style={{color:'Orange'}}>and stop hunger</h1>
    <h1 style={{color:'white'}}>Together</h1>
    <br></br>
    <Button href ="/donate" style={{backgroundColor:'darkorange'}}>Donate</Button>
    </div>
    </Col>
    <Col>
    <p id='aboutus'>

        <h1 style={{color:'white'}}>Moliere.</h1>

        <h3 style={{color:'Orange'}}>Every good act is charity.</h3> 
        <h3 style={{color:'white'}}>A man's true wealth hereafter</h3> 
        <h3 style={{color:'Orange'}}>is the good that he does </h3>
        <h3 style={{color:'white'}}>in this world to his fellows.</h3>
    </p>
    </Col>
    </Row>
</div>
    </>
  )
}

export default Testhomeback