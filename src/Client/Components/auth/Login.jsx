import React from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux'
import {login} from '../../actions/index';

const mapStateToProps= state => {
  return {
    user:state.loginReducer.user
  };
}

const mapDispatchToProps = dispatch =>{
  return{
    login(user){
      dispatch(login(user));
    }
  }
}

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
    }

    render() {
      return (
        <div class="container-fluid main-content">
        <div class="">
          <div class="login-content">
      
            <div class="text-center">
              <h2>Login</h2>
      
              <div class="alert">
                <div>An Error would go here</div>
              </div>
            </div>
            <div >
              <div >
                <form class="form-horizontal">
                <div class="form-group">
                  <label class="control-label col-sm-2" for="email">Email:</label>
                  <div class="col-sm-10">
                    <input type="email" class="form-control" id="email" placeholder="Enter email" name="email">
                  </div>
                </div>
                <div class="form-group">
                  <label class="control-label col-sm-2" for="pwd"/>Password:</label>
                  <div class="col-sm-10">          
                    <input type="password" class="form-control" id="pwd" placeholder="Enter password" name="pwd">
                  </div>
                </div>
                <div class="form-group">        
                  <div class="col-sm-offset-2 col-sm-10">
                    <div class="checkbox">
                      <label><input type="checkbox" name="remember"/> Remember me</label>
                    </div>
                  </div>
                </div>
                    <div class="control-group">
                      <div class="controls">
                      <Link to="/" className="btn btn-primary" onClick={()=>{this.props.login(this.state)}}>Iniciar Sesion</Link>
                        <a id="forgotPasswordLink" href="#">Forgot Password</a>
                      </div>
                    </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
      );
    }
}

export default connect (mapStateToProps,mapDispatchToProps) (Login);