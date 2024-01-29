import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import './css/Login.css';
import { useFirebase } from '../context/Firebase';



const Login = () =>{
  const firebase = useFirebase();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    if (firebase.isLoggedIn){
      //Navigate to home
      navigate("/Home");
    }
  }, [firebase, navigate])

  const handleSubmit = async (e) =>{
    e.preventDefault();
    console.log('login in up a user...');
    const result = await firebase.signInWithEmailAndPass(email,password);
    console.log('Successfull', result);
  };

    return(
        <>
        <div className="log">
        <Form onSubmit={handleSubmit}>
            <h3>LogIn</h3>
            <br/>
            <br/>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label  style={{fontSize:"20px"} }>Email address</Form.Label>
        <Form.Control  
          onChange={(e) => setEmail(e.target.value)}
          value={email}
          type="email" 
          placeholder="Enter email" />
        <Form.Text className="text-muted">
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label style={{fontSize:"20px"}}>Password</Form.Label>
        <Form.Control   
          onChange={(e) => setPassword(e.target.value)}
          value={password}
          type="password" 
          placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        {/* <Form.Check type="checkbox" label="Stay Sign up" /> */}
        <a className='ca' href="/NewLogin">Create Account</a>
      </Form.Group>
      <Button variant="primary" type="submit">
        Login
      </Button>
    </Form>
        </div>
        </>
    )
}
export default Login;