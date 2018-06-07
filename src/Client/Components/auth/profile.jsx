import React from 'react';
import { Link } from 'react-router';
import { FormErrors } from '../../lib/FormErrors';
import { updateprofile } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListErrors from '../errors/errors';

const mapStateToProps = state => {
  console.log(state);
  return {
    user:state.ProfileReducer.user
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({updateprofile}, dispatch);
}


class Profile extends React.Component {
    constructor({props,user}){
        super(props); 
        this.state = { 
            id: 0,               
            username:'',
            email:'',
            dni:'',
            date_birthday:'',
            name:'',
            apellidos:'',
            image:'',
            token:'',
            role:'',
            formErrors: {username:'',email: '', password: ''},
            emailValid: false,
            formValid: false
          };
          
          this.handleInputChange = this.handleInputChange.bind(this); 
          this.handleSubmit = this.handleSubmit.bind(this); 
          this.validateField = this.validateField.bind(this);
          this.validateForm = this.validateForm.bind(this);
    }    

    componentWillReceiveProps(nextProps){
      console.log(nextProps);
      debugger;
      this.setState({
        username:nextProps.user.username?nextProps.user.username:'', 
        dni:nextProps.user.dni?nextProps.user.dni:'', 
        email:nextProps.user.email?nextProps.user.email:'',
        date_birthday:nextProps.user.date_birthday?nextProps.user.date_birthday:'',
        name:nextProps.user.name?nextProps.user.name:'',
        apellidos:nextProps.user.apellidos?nextProps.user.apellidos:'',
        image:nextProps.user.image?nextProps.user.image:''
      });
      console.log(this.state);
    }

    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;

      this.setState({[name]: value}, () => { this.validateField(name, value) });
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
              <div className="Contact">
              <ListErrors className='alert'/>
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
                        </div>
                        <div className="dropdown">
                            <label className="inputSubject" htmlFor="inputSubject">Elegidos</label><br/>
                            <select className="btn btn-primary dropdown-toggle " id="inputSubject" name="role" title="Choose your role" onChange={this.handleInputChange}>
                                <option value="user">Usuario Normal</option>
                                <option value="admin">Administrador</option>
                            </select>
                        </div> <br/><br/><br/>
                        <div className="contact_item" disabled={!this.state.formValid} >
                          <Link to="/" className="btn-search" onClick={this.handleSubmit} >Actualiza tu perfile</Link>
                        </div>
              </form>
              </div>
              </div>
            </div>
          );
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (Profile);