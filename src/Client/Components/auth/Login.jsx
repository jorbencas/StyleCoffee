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
        <div className="container-fluid main-content">
        <div className="">
          <div className="login-content">
      
            <div className="text-center">
              <h2>Login</h2>
      
              <div className="alert">
                <div>An Error would go here</div>
              </div>
            </div>
            <div >
              <div >
                <form className="form-horizontal">
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="username">Username:</label>
                  <div className="col-sm-10">
                    <input type="text" className="form-control" id="username" placeholder="Enter username" name="username"  onChange={this.handleInputChange}/>
                  </div>
                </div>
                <div className="form-group">
                  <label className="control-label col-sm-2" htmlFor="pwd">Password:</label>
                  <div className="col-sm-10">          
                    <input type="password" className="form-control" id="pwd" placeholder="Enter password" name="password" onChange={this.handleInputChange}/>
                  </div>
                </div>
                <div className="form-group">        
                  <div className="col-sm-offset-2 col-sm-10">
                    <div className="checkbox">
                      <label><input type="checkbox" name="remember"/> Remember me</label>
                    </div>
                  </div>
                </div>
                    <div className="control-group">
                      <div className="controls">
                      <Link to="/" className="btn btn-primary" onClick={()=>{this.props.login(this.state)}}>Iniciar Sesion <i className="fa fa-arrow-circle-right"></i></Link>
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