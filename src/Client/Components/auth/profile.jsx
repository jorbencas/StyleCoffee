import React from 'react';
import { Link } from 'react-router';
import { FormErrors } from '../../lib/FormErrors';
import { updateprofile } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListErrors from '../errors/errors';
import DatePicker from 'react-datepicker';

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
    constructor(props){
        super(props); 
        console.log(props);
        this.state = { 
            id: 0,               
            username:props.user.username?props.user.username:'',
            email:props.user.email?props.user.email:'',
            dni:props.user.dni?props.user.dni:'',
            date_birthday:props.user.date_birthday?props.user.date_birthday:'',
            name:props.user.name?props.user.name:'',
            apellidos:props.user.apellidos?props.user.apellidos:'',
            image:props.user.image?props.user.image:'',
            role:props.user.role?props.user.role:'',
            formErrors: {username:'',email: '', password: ''},
            emailValid: false,
            formValid: false
          };
          
          this.handleInputChange = this.handleInputChange.bind(this); 
          this.handleSubmit = this.handleSubmit.bind(this); 
          this.validateField = this.validateField.bind(this);
          this.validateForm = this.validateForm.bind(this);
    }    

    componentDidMount(){
      $('#inputSubject').val(this.state.role);
    }
    componentWillReceiveProps(nextProps){
      console.log(nextProps);
      this.setState({
        username:nextProps.user.username?nextProps.user.username:'', 
        dni:nextProps.user.dni?nextProps.user.dni:'', 
        email:nextProps.user.email?nextProps.user.email:'',
        date_birthday:nextProps.user.date_birthday?nextProps.user.date_birthday:'',
        name:nextProps.user.name?nextProps.user.name:'',
        apellidos:nextProps.user.apellidos?nextProps.user.apellidos:'',
        image:nextProps.user.image?nextProps.user.image:''
      });
      $('#inputSubject').val(nextProps.user.role);
      console.log(this.state);
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
                      passwordValid: passwordValid}, this.validateForm);
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
                <ListErrors/>
                  <form id="contact_form" name="contact_form" className="form-contact">
                      <h1 id="heading">Registrar se</h1>
                      <div><FormErrors formErrors={this.state.formErrors} /></div>
                      <img src={this.state.image !== '' ?this.state.image:'https://static.productionready.io/images/smiley-cyrus.jpg'} alt=""/>
                        <div className="contact_item">
                          <label htmlFor="username">Username</label><br/>
                          <input type="text" id="username" name="username" placeholder="Nombre *" onChange={this.handleInputChange} value={this.state.username} />
                        </div>
                        <div>
                          <label htmlFor="dni">DNI:</label>
                          <input type="text" id="dni" name="dni" placeholder="Nombre *" onChange={this.handleInputChange} value={this.state.dni} />
                        </div>
                        <div className={`contact_item  ${this.errorClass(this.state.formErrors.email)}`}>
                          <label htmlFor="email">Email</label><br/>
                          <input type="email" id="email" name="email" placeholder="Email *" onChange={this.handleInputChange} value={this.state.email}/>
                        </div>
                        <div className={`contact_item  ${this.errorClass(this.state.formErrors.password)}`}>
                          <label htmlFor="password">Password</label><br/>
                          <input type="password" id="password" name="password" placeholder="Password *" onChange={this.handleInputChange} />
                        </div>
                        <div className={}>
                          <label htmlFor="date_birthday">Fecha de nacimiento</label>
                          <input type=" date" id="datepicker" name="date_birthday" placeholder="Date Birthday" onChange={this.handleInputChange} value={this.state.date_birthday}  />
                        </div>
                        <div>
                          <label htmlFor="name">Nombre</label>
                          <input type="text" name="name" id="name" onChange={this.handleInputChange} value={this.state.name}/>
                        </div>
                        <div className={`contact_item  ${this.errorClass(this.state.formErrors.password)}`}>
                          <label htmlFor="apellidos" htmlFor="apellidos">Apellidos</label>
                          <input type="text" name="apellidos" id="apellidos" onChange={this.handleInputChange} value={this.state.apellidos}/>
                        </div>
                        <div className="dropdown">
                            <label className="inputSubject" htmlFor="inputSubject">Elegidos</label><br/>
                            <select className="btn btn-primary dropdown-toggle " id="inputSubject" name="role" title="Choose your role" onChange={this.handleInputChange}>
                                <option value="user">Usuario Normal</option>
                                <option value="admin">Administrador</option>
                            </select>
                        </div> <br/><br/><br/>
                        <div className="contact_item" disabled={!this.state.formValid} >
                          <Link to="/" className="btn btn-primary" onClick={this.handleSubmit} >Actualiza tu perfile</Link>
                        </div>
                  </form>
                </div>
              </div>
            </div>
          );
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (Profile);