import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './css/NewLogin.css';
import { useFirebase } from '../context/Firebase';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import DarkMode from './DarkMode';
import Container from 'react-bootstrap/Container';


const NewLogin = () =>{
  const firebase = useFirebase();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fname, setfName] = useState('');
  const [lname, setlName] = useState('');

  useEffect(() => {
    if (firebase.isLoggedIn){
      //Navigate to home
      navigate("/");

    }
  }, [firebase, navigate])

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log('signin up a user...')
    const result = await firebase.signupUserWithEmailAndPassword(email,password);
    console.log('Successfull', result);
  };

  return(
    
        <div className='page' >
          <Navbar expand="lg" bg="dark" data-bs-theme="dark">
            <Container >
                <Navbar.Brand ><Nav.Link  href="./">Crop Management Monitor</Nav.Link></Navbar.Brand>
                <Navbar.Toggle />
                <DarkMode/>
            </Container>
          </Navbar>
        <div className='logi'>
        <Form onSubmit={handleSubmit}>
          
          <br/>
          <h3>SignUp</h3>
          <br/>
          
      <Form.Group className="mb-3" controlId="formBasicEmail">

      <Form.Label><strong>Name</strong></Form.Label>
        <Form.Control 
          onChange={(e) => setfName(e.target.value)}
          value={fname}
          type="fname" placeholder="Enter Name" /><br></br>

        <Form.Label><strong>Surname</strong></Form.Label>
        <Form.Control 
          onChange={(e) => setlName(e.target.value)}
          value={lname}
          type="lname" 
          placeholder="Enter Surname" /><br></br>

        <Form.Label><strong>Email address</strong></Form.Label>
        <Form.Control 
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email" 
          placeholder="Enter email" />
        <Form.Text className="text-muted">
        
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label><strong>Password</strong></Form.Label>
        <Form.Control
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password" placeholder="Password" />
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        {/* <Form.Check type="checkbox" label="Stay Sign up" /> */}
        <a className='ca' href="/Login">Log In</a>
      </Form.Group>

      <Button variant="primary" type="submit">
        Create
      </Button>
      <br/>
    </Form>
    </div>
      </div>
    )
}
export default NewLogin;


