import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux'
import {login} from '../../actions/index';

class Login extends React.Component {
    constructor({props,login}) {
        super(props);

        this.state = { 
          username: '',
          password: ''
        };

        this.handleInputChange = this.handleInputChange.bind(this); 
    }
    
      
    handleInputChange(event) {
      const target = event.target;
      const value = target.type === 'checkbox' ? target.checked : target.value;
      const name = target.name;
  
      this.setState({[name]: value});
  
      console.log(this.state);
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
                          <Link to="/" className="btn-search" onClick={()=>{login(this.state)}}>Iniciar Sesion</Link>
                        </div>
                    </form>
                </div> 
        </div>
      );
    }
}


const mapStateToProps= state => {
  console.log(state);
  return {
    user:state.loginReducer.user
  };
}

const mapDispatchToProps = dispatch =>{
  return{
    login(user){
      console.log(user);
      dispatch(login(user));
    }
  }
}

export default connect (mapStateToProps,mapDispatchToProps) (Login);