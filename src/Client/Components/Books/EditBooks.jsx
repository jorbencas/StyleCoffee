import React from 'react';
import { Link } from "react-router";
import {connect} from 'react-redux';
import {createbook} from '../../actions/index';
import { bindActionCreators } from 'redux';
import ListErrors from '../errors/errors';
import { FormErrors } from '../../lib/FormErrors';

const mapStateToProps= state => {
    return {
      detail:state.booksdetails.books
    };
  }
  
  const mapDispatchToProps = dispatch =>{
    return bindActionCreators({createbook}, dispatch);
  }

  class managebooks extends React.Component {
    constructor({props,detail}){
        super(props);  
        this.state = {                
            id:0,
            title:'', 
            author:'', 
            description: '',
            yearpublication:'',
            edition:'',
            formato:'',
            image:'',
            languaje:'',
            state:'',
            numpages:0,
            price:0,
            genere:{},
            stock:0,
            formErrors: {detailname:'',email: '', password: ''},
            emailValid: false,
            formValid: false
          };
          this.handleInputChange = this.handleInputChange.bind(this); 
          this.handleSubmit = this.handleSubmit.bind(this); 
          this.validateField = this.validateField.bind(this);
          this.validateForm = this.validateForm.bind(this);
    }    

    componentWillReceiveProps(nextProps){
      console.log(nextProps.detail[0]);
      this.setState({
        id:nextProps.detail[0].id?nextProps.detail[0].id:'',
        title:nextProps.detail[0].title?nextProps.detail[0].title:'', 
        author:nextProps.detail[0].author?nextProps.detail[0].author:'', 
        description:nextProps.detail[0].description?nextProps.detail[0].description:'',
        yearpublication:nextProps.detail[0].yearpublication?nextProps.detail[0].yearpublication:'',
        edition:nextProps.detail[0].edition?nextProps.detail[0].edition:'',
        formato:nextProps.detail[0].formato?nextProps.detail[0].formato:'',
        image:nextProps.detail[0].image?nextProps.detail[0].image:'',
        languaje:nextProps.detail[0].languaje?nextProps.detail[0].languaje:'',
        state:nextProps.detail[0].state?nextProps.detail[0].state:'',
        numpages:nextProps.detail[0].numpages?nextProps.detail[0].numpages:0,
        price:nextProps.detail[0].price?nextProps.detail[0].price:0,
        genere:nextProps.detail[0].genere?nextProps.detail[0].genere:{},
        stock:nextProps.detail[0].stock?nextProps.detail[0].stock:0
        });
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
        this.props.createbook(this.state);
    }

    render() {
        console.log(this.state);         
          return (
            <div>
              <div className="grid-main">
              <ListErrors/>
               <form id="contact_form" name="contact_form" className="form-contact">
                      <h1 id="heading">Crea un libro</h1>
                      <div><FormErrors formErrors={this.state.formErrors} /></div>
                      <img src={this.state.image} alt="" srcSet=""/>
                        <div className="contact_item">
                          <label htmlFor="title">name</label><br/>
                          <input type="text" id="title" name="title" placeholder="title *" onChange={this.handleInputChange} value={this.state.title} required/>
                        </div>
                        <div>
                          <label htmlFor="autor"></label>
                          <input type="text" id="autor" name="autor" placeholder="autor *" onChange={this.handleInputChange} value={this.state.author} required/>
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
                          <Link to="/BooksList" className="btn-search" onClick={this.handleSubmit} >Resgistrar se</Link>
                        </div>
              </form>
              </div>
            </div>
          );
    }
}


export default connect (mapStateToProps,mapDispatchToProps)(managebooks);