import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { firebaseAuth, useFirebase } from '../context/Firebase';
import { signOut } from 'firebase/auth';

//bootstrap

import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//css
import './css/Home.css';

//
const Home = () => {
    const firebase = useFirebase();
    const navigate = useNavigate();
    

    useEffect(() => {
        //Navigate to Home if logged in 
        if(firebase.isLoggedIn ){
            navigate("/Home")
        }

    }, [firebase, navigate])

    const handleLogOut = () =>{
       signOut(firebaseAuth).then(() => {
        navigate("/");
        console.log("Signed Out")
       });
    };

    return(
        <>
            <Navbar bg="dark" data-bs-theme="dark">
            <Container >
                <Navbar.Brand >Crop Management Monitor</Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse >
                <Nav >
                    <Nav.Link  href="./Home">Home</Nav.Link>
                    <Nav.Link href="./Display">Display</Nav.Link>
                </Nav>
                </Navbar.Collapse>
                    <Navbar.Collapse className="justify-content-end">
                    <NavDropdown className='coolfont' title="Hii User" >
                    <NavDropdown.Item  href="#action/3.1">Settings</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item onClick={handleLogOut} >
                        Logout
                    </NavDropdown.Item>
                    </NavDropdown>
                    </Navbar.Collapse>
                
                
            </Container>
            </Navbar>


            <div className='homie'>
                
                   
                    
                    
            </div>
        </>
    )
}

export default Home;