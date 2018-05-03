import React from 'react';
import { contactService } from '../../services/services';
import { FormErrors } from '../../lib/FormErrors';

class BuyForm extends React.Component {
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
                        <h1 className="contact_item">Contacto</h1>
                        <div><FormErrors formErrors={this.state.formErrors} /></div>
                        <div className={`contact_item  ${this.errorClass(this.state.formErrors.email)}`}>
                            <label>
                                <span>Card Number</span>
                                <input name="card-number" type="text" size="20" data-stripe="number"/>
                            </label>
                        </div>
                        <div className="contact_item">
                            <label>
                                <span>Expiration (MM/YY)</span>
                                <input name="expiry-month" type="text" size="2" data-stripe="exp_month"/>
                            </label>
                            <span> / TO </span>
                            <input name="expiry-year" type="text" size="2" data-stripe="exp_year"/>
                        </div>
                        <div className="contact_item">
                        <span>CVC</span>
                        <input  name="cvc" type="text" size="4" id="cvc"/>
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

export default BuyForm;