import React from 'react';
import { contactService } from '../../services/services';
import { FormErrors } from '../../lib/FormErrors';

class ReserveBook extends React.Component {
    constructor(props){
        super(props);

        this.state = {
            name:'',
            message:'',
            email:'',
            subject:'',
            formErrors: {email: ''},
            emailValid: false,
            passwordValid: false,
            formValid: false
        }; 
        this.handleInputChange = this.handleInputChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
        this.validateField = this.validateField.bind(this);
        this.validateForm = this.validateForm.bind(this);
    };   

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
    event.preventDefault();
    contactService(this.state);
}


    render() {               
        return (
            <div className="grid-main">
                <div className="Contact">
                    <form id="contact_form" name="contact_form" className="form-contact">
                        <h1 className="contact_item">Reserva un libro</h1>
                        <div><FormErrors formErrors={this.state.formErrors} /></div>
                        <div className="contact_item">
                            <label htmlFor="name">Titulo</label><br/>
                            <input required type="text" id="name" name="name" placeholder="Nombre" onChange={this.handleInputChange} required/>
                        </div>
                        <div className={`contact_item  ${this.errorClass(this.state.formErrors.email)}`}>
                            <label htmlFor="email">Correo electronico</label><br/>
                            <input required type="email" id="email" name="email" placeholder="Email *" onChange={this.handleInputChange} required/>
                        </div>
                        <div className={`contact_item  ${this.errorClass(this.state.formErrors.email)}`}>
                            <label htmlFor="email">Dni</label><br/>
                            <input required type="email" id="email" name="email" placeholder="Email *" onChange={this.handleInputChange} required/>
                        </div>
                        <div className={`contact_item  ${this.errorClass(this.state.formErrors.email)}`}>
                            <label htmlFor="email">Hora de la reserva</label><br/>
                            <input required type="email" id="email" name="email" placeholder="Email *" onChange={this.handleInputChange} required/>
                        </div>
                        <div className="contact_item">
                            <label htmlFor="recomendation">Hace Aqui tu reserva</label><br/>
                            <textarea required className="contact_item" id="recomendation" name="message" placeholder="Introduzca aqui su mensaje *" onChange={this.handleInputChange} required></textarea>
                        </div>
                        <div className="contact_item"  disabled={!this.state.formValid}>
                            <input className="contact_Item" type="submit" name="submit" id="submit" value="Enviar" onClick={this.handleSubmit}/>
                        </div>
                    </form>
                </div> 
            </div>
        );
    }
}

export default ReserveBook;