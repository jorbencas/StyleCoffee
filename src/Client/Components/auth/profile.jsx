import React from 'react';
import { Link } from 'react-router';
import { FormErrors } from '../../lib/FormErrors';
import { updateprofile, profile } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListErrors from '../errors/errors';

const mapStateToProps= (state) => {
  return {
    user:state.ProfileReducer.profile
  };
}

const mapDispatchToProps = (dispatch) =>{
  return bindActionCreators({profile,updateprofile}, dispatch);
}


class Profile extends React.Component {
    constructor(props){
        super(props);  
        this.state = {                
            username:'',
            email:'',
            dni:'',
            date_birthday:'',
            name:'',
            apellidos:'',
            image:'',
            token:'',
            formErrors: {username:'',email: '', password: ''},
            emailValid: false,
            formValid: false
          };
          this.handleInputChange = this.handleInputChange.bind(this); 
          this.handleSubmit = this.handleSubmit.bind(this); 
          this.validateField = this.validateField.bind(this);
          this.validateForm = this.validateForm.bind(this);
    }    

    componentWillMount(){
      this.props.profile();
    }

    componentWillReceiveProps(nextProps){
      console.log(nextProps.user);
      this.setState({
        id:nextProps.user.id,
        username:nextProps.user.username, 
        dni:nextProps.user.dni, 
        email:nextProps.user.email,
        date_birthday:nextProps.user.date_birthday,
        name:nextProps.user.name,
        apellidos:nextProps.user.apellidos,
        image:nextProps.user.image,})
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
      console.log(name);
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
      this.props.updateprofile(this.state);
    }

    render() {         
          return (
            <div>
              <div className="grid-main">
              <ListErrors/>
               <form id="contact_form" name="contact_form" className="form-contact">
                      <h1 id="heading">Registrar se</h1>
                      <div><FormErrors formErrors={this.state.formErrors} /></div>
                      <img src={this.state.image} alt="" srcSet=""/>
                        <div className="contact_item">
                          <label htmlFor="username">name</label><br/>
                          <input type="text" id="username" name="username" placeholder="Nombre *" onChange={this.handleInputChange} value={this.state.username} required/>
                        </div>
                        <div>
                          <label htmlFor="dni"></label>
                          <input type="text" id="dni" name="dni" placeholder="Nombre *" onChange={this.handleInputChange} value={this.state.dni} required/>
                        </div>
                        <div className={`contact_item  ${this.errorClass(this.state.formErrors.email)}`}>
                          <label htmlFor="email">Email</label><br/>
                          <input type="email" id="email" name="email" placeholder="Email *" onChange={this.handleInputChange} value={this.state.email}required/>
                        </div>
                        <div className={`contact_item  ${this.errorClass(this.state.formErrors.password)}`}>
                          <label htmlFor="password">Password</label><br/>
                          <input type="password" id="password" name="password" placeholder="Password *" onChange={this.handleInputChange} required/>
                        </div>
                        <div>
                          <label htmlFor="date_birthday">Fecha de nacimiento</label>
                          <input type="date" id="date_birthday" name="date_birthday" placeholder="date_birthday" onChange={this.handleInputChange} required/>
                        </div>
                        <div>
                          <label htmlFor="name">Nombre</label>
                          <input type="text" name="name" id="name" onChange={this.handleInputChange} required/>
                        </div>
                        <div className={`contact_item  ${this.errorClass(this.state.formErrors.password)}`}>
                          <label htmlFor="apellidos" htmlFor="apellidos">Apellidos</label>
                          <input type="text" name="apellidos" id="apellidos" onChange={this.handleInputChange} required/>
                        </div> <br/><br/><br/>
                        <div className="contact_item" disabled={!this.state.formValid} >
                          <Link to="/" className="btn-search" onClick={this.handleSubmit} >Resgistrar se</Link>
                        </div>
              </form>
              </div>
            </div>
          );
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (Profile);