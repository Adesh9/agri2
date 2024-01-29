import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { firebaseAuth, useFirebase } from '../context/Firebase';
import { signOut } from 'firebase/auth';


import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Carousel from 'react-bootstrap/Carousel';
import './css/Responsive.css';
//import img from './headphone.jpeg';
import Farm1 from './Farm1.jpg';
import Farm2 from './Farm2.jpg';
import Farm3 from './Farm4.jpg';
import Col from 'react-bootstrap/Col';
import container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
//import image from './Money.png';
import ProgressBar from 'react-bootstrap/ProgressBar';
//import { BiCommand } from 'react-icons/bi';
//import Nav1 from './Nav1.jpg';
import Card from 'react-bootstrap/Card';





function Response() {

    <srcipt src="https://translate.google.com/"></srcipt>


    return (
        <>
        <div className='nav1'>

      <Navbar expand="lg" className="bg-body-primary">
        <Container className ="c1" fluid>
          <Navbar.Brand href="#" style ={{color:"white"}}> </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: '100px' }}
              navbarScroll
            >
            
              <Nav.Link style ={{color:"white"}} href="#action1">Home</Nav.Link>
              <Nav.Link style ={{color:"white"}} href="/Interface">Visualization</Nav.Link>
              <NavDropdown style ={{color:"white"}} title="Monitor" id="navbarScrollingDropdown">
              
                <NavDropdown.Item  style ={{color:"purple",fontSize:"20px"}} href="#action3">Temperature</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item  style ={{color:"purple",fontSize:"20px"}} href="#action4">
                  Soil Moisture
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item style ={{color:"purple",fontSize:"20px"}} href="#action5">
                  Water Supply
                </NavDropdown.Item>
                
              </NavDropdown>

            

            <diV className="t1"></diV>
            


              <Nav.Link style ={{color:"white"}} href="/Login">Login</Nav.Link>
             
            
              
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button style={{color:"white"}} variant="outline-success">Search</Button>
            </Form>
            
          </Navbar.Collapse>
        </Container>
      </Navbar>
      </div>

      <div className='slide'>
      <Carousel data-bs-theme="white">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Farm1}
          alt="First slide" style={{width:"100%", height:"560px"}}
        />
        <Carousel.Caption>
          <h3 style={{color:"white"}}>Farm Management</h3>
      
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Farm2}
          alt="Second slide" style={{width:"100%", height:"560px"}}
        />
        <Carousel.Caption>
          <h3 style={{color:"white"}}>Soil Moisture Detection</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={Farm3}
          alt="Third slide" style={{width:"100%", height:"560px"}}
        />
        <Carousel.Caption>
          <h3  style={{color:"white",fontSize:"30px",margin:"-40px" }}>Irrigation & Temperature</h3>
         
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
      {/* 
    
      

        <div className='version'>
      <div className='li1'>
        <h3 className='w1'>Key features</h3>
           <ol >
          <li className='w1'>♻ Geotag farm plots</li>
          <li className='w1'>♻ Detect crops</li>
          <li className='w1'>♻ Monitor input usage</li>
          <li className='w1'>♻ Share weather-related advisory</li>
          <li className='w1'>♻ Monitor crop health remotely</li>
          <li className='w1'>♻ Set pest and disease alerts</li>
          <li className='w1'>♻ Manage alerts and activity log</li>
          <li className='w1'>♻ Set up workflows and tasks for the field </li>

        </ol>
      </div>
      <div className='li2'>
        <h3 className='w2'>Benefits</h3>
           <ol >
          <li  className='w2'>♻ Complete farm digitization</li>
          <li  className='w2'>♻ Improved data capture accuracy</li>
          <li  className='w2'>♻ Traceability and output predictability</li>
          <li  className='w2'>♻ Increased farm productivity</li>
          <li  className='w2'>♻ Improved profitability</li>
          <li  className='w2'>♻ Adherence to the package of practices</li>
          <li  className='w2'>♻ Improved yield quality & quantity</li>
          <li  className='w2'>♻ Reduced cost of operations</li>
           
        </ol>
      </div>
      </div>
      <br></br> */}

      <div className='sm'>

        <h1 className='lop'>Soil Moisture</h1>
      
        <div className='sm1'>
        <h1 className='fd'>Field 1</h1>
        <Button className='btt'  variant="success">Sprinkle Status</Button>
        </div>
        
        <div className='sm2'>
        <h1 className='fd'>Field 2</h1>
        <Button className='btt'  variant="success" >Sprinkle Status</Button>
        </div>
      </div>
      <div className='cc'>

      </div>

      <div className='tmepi'>
      <h1 className='lop'>Temperature</h1>
      <div className='tm1'>
        <h1 className='td'>Temperature sensor</h1>
        <Button className='ttt'  variant="success">Temperature Status</Button>
        </div>

        <div className='cc'>

      </div>
      
      

      <div className='smms'>

<h1 className='loop'>Other Reading's</h1>

<div className='sm1'>
<h1 className='fd'>Smoke Sensor</h1>
<Button className='btt'  variant="success">Smoke  Status</Button>
</div>

<div className='sm2'>
<h1 className='fd'>Motor </h1>
<Button className='btt'  variant="success" >Motor Status</Button>
</div>
</div>



      </div>

        
   
      
    
      </>
    );
  }
  export default Response;