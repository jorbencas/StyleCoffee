import React from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';
import { FormErrors } from '../../lib/FormErrors';
import { SingUp } from '../../actions/index';
import { bindActionCreators } from 'redux';
import {hashcode} from '../../lib/utils';
import ListErrors from '../errors/errors';

const mapStateToProps= state => {
  return {
    user:state.loginReducer.user
  };
}

const mapDispatchToProps = dispatch =>{
  return bindActionCreators({SingUp}, dispatch);
}

class singup extends React.Component {
    constructor({props,SingUp}) {
        super(props);

        this.state = {
          id:0, 
          username: '',
          email:'',
          password: '',
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
      
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({[name]: value}, () => { this.validateField(name, value) });


      let newid = hashcode(this.state.username + this.state.email + this.state.password);
      if(newid !== 0){
        this.setState({id: newid});
        console.log(this.state);
      }

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
      this.props.SingUp(this.state)
    }

    render() {
      return (
        <div className="container-fluid main-content">
          <div className="login-content">
      
            <div className="text-center">
              <h2>Sing Up</h2>
              <ListErrors/>
            </div>
                <form className="form-horizontal">
                <div className="form-group">
                  <span className="input-group-addon"><i className="fa fa-user"></i></span>
                  <label className="control-label col-sm-2" htmlFor="username">Username:</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="username" placeholder="Enter username" name="username"  onChange={this.handleInputChange}/>
                  </div>
                </div>
                <div className={`form-group ${this.errorClass(this.state.formErrors.email)}`}>
                <span className="input-group-addon"><i className="fa fa-envelope"></i></span>
                  <label className="control-label col-sm-2" htmlFor="email">Email:</label>
                  <div className="col-sm-10">
                    <input type="email" className="form-control" id="email" placeholder="Enter email" name="email"  onChange={this.handleInputChange}/>
                  </div>
                </div>
                <div className="form-group">
                  <span className="input-group-addon"><i className="fa fa-lock"></i></span>
                  <label className="control-label col-sm-2" htmlFor="pwd">Password:</label>
                  <div className="col-sm-10">          
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="password"  onChange={this.handleInputChange}/>
                  </div>
                </div>
                <br/><br/>
                <div className="dropdown">
                  <label className="control-label col-sm-2" htmlFor="role">Elegidos</label><br/>
                  <select className="btn btn-primary dropdown-toggle " id="role" name="role" title="Choose your role" onChange={this.handleInputChange}>
                    <option value="user">Usuario Normal</option>
                    <option value="admin">Administrador</option>
                  </select>
                </div>
                <br/><br/>
                    <div className="control-group">
                      <div className="controls">
                      <Link to="/" className="btn btn-primary btn-xs" onClick={this.handleSubmit}>Resgistrar se <i className="fa fa-arrow-circle-right"></i></Link><br/>
                        <a id="forgotPasswordLink" href="#">Forgot Password</a>
                      </div>
                    </div>
                </form>
          </div>
      </div>
      );
    }
}

export default connect (mapStateToProps,mapDispatchToProps) (singup);