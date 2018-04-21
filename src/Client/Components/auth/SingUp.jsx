import React from 'react';
import { Link } from 'react-router';
import { SingUp, logOut } from '../../services/services';
import * as actions from '../../actions';
import { connect } from 'react-redux';
import { FormErrors } from '../../lib/FormErrors';

class singup extends React.Component {
    constructor(props) {
        super(props);

        this.state = { 
          username: '',
          email:'',
          password: '',
          formErrors: {username:'',email: '', password: ''},
          emailValid: false,
          formValid: false
        };

        this.handleInputChange = this.handleInputChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.validateField = this.validateField.bind(this);
        this.validateForm = this.validateForm.bind(this);
    }
      
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({[name]: value}, () => { this.validateField(name, value) });
  
      console.log(this.state);
  }

    validateField(fieldName, value) {
      let fieldValidationErrors = this.state.formErrors;
      let emailValid = this.state.emailValid;
      let passwordValid = this.state.passwordValid;
    
      switch(fieldName) {
        case 'email':
          emailValid = value.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i);
          fieldValidationErrors.email = emailValid ? '' : ' is invalid';
          break;
        case 'password':
          passwordValid = value.length >= 6;
          fieldValidationErrors.password = passwordValid ? '': ' is too short';
          break;
        default:
          break;
      }
      this.setState({formErrors: fieldValidationErrors,
                      emailValid: emailValid,
                      passwordValid: passwordValid
                    }, this.validateForm);
    }
    
    validateForm() {
      this.setState({formValid: this.state.emailValid && this.state.passwordValid});
    }
  
    errorClass(error) {
      return(error.length === 0 ? 'Tu debes escribir algo' : 'has-error');
    }

    
    handleSubmit(event) {
        SingUp(this.state);
        //actions.login();
    }


    render() {
      return (
        <div className="grid-main">
          <div className="Contact">
                    <form id="contact_form" name="contact_form" className="form-contact">
                      <h1 id="heading">Registrar se</h1>
                      <div><FormErrors formErrors={this.state.formErrors} /></div>
                        <div className="contact_item">
                          <label htmlFor="username">name</label><br/>
                          <input required type="text" id="username" name="username" placeholder="Nombre *" onChange={this.handleInputChange} required/>
                        </div>
                        <div className={`contact_item  ${this.errorClass(this.state.formErrors.email)}`}>
                          <label htmlFor="email">Email</label><br/>
                          <input required type="email" id="email" name="email" placeholder="Email *" onChange={this.handleInputChange} required/>
                        </div>
                        <div className={`contact_item  ${this.errorClass(this.state.formErrors.password)}`}>
                          <label htmlFor="password">Password</label><br/>
                          <input required type="password" id="password" name="password" placeholder="Password *" onChange={this.handleInputChange} required/>
                        </div>
                        <br/>
                        <br/><br/>
                        <div className="contact_item" disabled={!this.state.formValid} >
                          <Link to="/" className="btn-search" onClick={this.handleSubmit} >Resgistrar se</Link>
                        </div>
                        <br/>
                        <br/>
                        <hr/>
                        <div className="Social_Item">
                          <div className="btn-google">
                            <img src="http://pngimg.com/uploads/google/google_PNG19635.png" width="18%" height="45%" alt="Google" srcSet=""/>
                            <Link to='/' href="http://localhost:3001/api/SigUpGoogle">Sing Up with Google</Link>
                          </div>
                          <div className="btn-twitter">
                            <img src="http://backgroundcheckall.com/wp-content/uploads/2017/12/twitter-logo-transparent-background-2.png" width="18%" height="45%" alt="Twitter" srcSet=""/>
                            <Link to='/' href="http://localhost:3001/api/twitter">Sing Up with Twitter</Link>
                          </div>
                        </div>
                    </form>
                </div> 
        </div>
      );
    }
}

export default singup;