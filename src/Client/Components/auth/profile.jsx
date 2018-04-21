import React from 'react';
import ReactDOM  from 'react-dom';
import { Link } from 'react-router';
import axios from 'axios';
import { FormErrors } from '../../lib/FormErrors';
import update from '../../services/services';

class Profile extends React.Component {
    constructor(props){
        super(props);   
        this.state = {                
            components: [],
            username: '',
            image:'',
            email:'',
            password: '',
            formErrors: {username:'',email: '', password: ''},
            emailValid: false,
            formValid: false
          };
          console.log('Hola' +  this.state);
          this.handleInputChange = this.handleInputChange.bind(this); 
          this.handleSubmit = this.handleSubmit.bind(this); 
          this.validateField = this.validateField.bind(this);
          this.validateForm = this.validateForm.bind(this);
    }    
    componentWillMount() {
      this.getdata();
    }

    getdata(event){
      const payload = localStorage.getItem('username');
      let that = this;
      if (payload){
        axios.get('http://localhost:3001/api/profiles/' + payload)
        .then(
          response => that.setState({components: response.data.profile},console.log(response.data.profile))
        );
      }
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

    handleSubmit(event){
      update(this.state.components);
    }

    render() {   
      console.log(this.state.email + ' ' + this.state.password + ' ' + this.state.image);            
          return (
            <div>
              <div className="grid-main">
               <form id="contact_form" name="contact_form" className="form-contact">
                      <h1 id="heading">Registrar se</h1>
                      <div><FormErrors formErrors={this.state.formErrors} /></div>
                        <div className="contact_item">
                          <label htmlFor="username">name</label><br/>
                          <input required type="text" id="username" name="username" placeholder="Nombre *" onChange={this.handleInputChange} value={this.state.username} required/>
                        </div>
                        <div className={`contact_item  ${this.errorClass(this.state.formErrors.email)}`}>
                          <label htmlFor="email">Email</label><br/>
                          <input required type="email" id="email" name="email" placeholder="Email *" onChange={this.handleInputChange} value={this.state.email}required/>
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
              </form>
              </div>
            </div>
          );
    }
}

export default Profile;