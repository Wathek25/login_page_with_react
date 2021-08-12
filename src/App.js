
import './App.css';
import { button, Form, FormGroup, label, input, Navbar, Container } from 'react-bootstrap';
import { FacebookLoginButton, GoogleLoginButton } from "react-social-login-buttons";
import logo from './react_logo.png'
// import { GoogleLoginButton } from "react-google-login-buttons";

function App() {
  return (

  <div>
    <Navbar bg="dark" variant="dark">
    <Container>
      <Navbar.Brand href="#home">
        <img
          alt="react_logo"
          src={logo}
          width="50"
          height="30"
          className="d-inline-block align-top"
        />{' '}
      Simple login page with react
      </Navbar.Brand>
    </Container>
  </Navbar>
  
    <Form className="login-form">
      <h1><span className = " font-weight-bold text-center">Welcome!</span></h1>
      <FormGroup>
        <label>Email :</label><br/>
        <input type="email" placeholder="Your email@"/><br/>
        <label>Password :</label><br/>
        <input type="password" placeholder="Your password"/><br/>
      </FormGroup>
        <button className="btn btn-lg btn-dark btn-block" >Log in</button>
        <div className="pt-3">Or Continue with your social account</div>
        <FacebookLoginButton/>
        <GoogleLoginButton/>
        <div className="text-center">
          <a href="#">Sign up</a>
          <span className="p-2"> | </span>
          <a href="#">Forget password ?</a>
        </div>
    </Form>
  </div>
  );
}

export default App;
