import App from './App.jsx';
import React from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router';
import Home from './Home';
import { LoginService, logOut } from '../services/services';
import { FormErrors } from '../lib/FormErrors';

class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
          isOpen: false,
          username: '',
          email:'',
          password: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
    }
    
      
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({[name]: value});
  
      console.log(this.state);
    }

    handleSubmit(event) {
        LoginService(this.state);
    }

    render() {
      return (
        <div className="grid-main">
          <div className="Contact">
                    <form id="contact_form" name="contact_form" className="form-contact">
                    <h1 id="heading">Iniciar Sesión</h1>
                        <div className="contact_item">
                          <label htmlFor="username">name</label><br/>
                          <input required type="text" id="username" name="username" placeholder="Nombre *" onChange={this.handleInputChange} required/>
                        </div>
                        <div className="contact_item">
                          <label htmlFor="password">Password</label><br/>
                          <input required type="password" id="password" name="password" placeholder="Password *" onChange={this.handleInputChange} required/>
                        </div>
                        <br/><br/>
                        <div>
                          <Link to="/" className="btn-search" onClick={this.handleSubmit}>Iniciar Sesion</Link>
                        </div>
                    </form>
                </div> 
        </div>
      );
    }
}

export default Login;