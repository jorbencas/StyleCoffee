import React from 'react';
import { Link } from "react-router";
import { logOut } from '../../services/services';
import { connect } from 'react-redux';

class Header extends React.Component {
    constructor({props, authenticated, username}){
        super(props);  
        this.state = {
          authenticated:'',
          username:''
        }
        
        this.menulogin = this.menulogin.bind(this); 
    }    

    componentWillReceiveProps(nextProps){
      this.setState({
        authenticated: nextProps.authenticated,
        username:nextProps.username.user.username
        });
        console.log(this.state);
    }

    menulogin(){
      if(this.state.authenticated == true ){
          return(
            <ul>
              <li className="listado-item"><Link to="/Contact">Contact</Link></li>
              <li className="listado-item"><Link to="/CoffeeList">Cafes</Link></li>
              <li className="listado-item"><Link to="/BooksList">Books</Link></li>
              <li className="listado-item"><Link to="/abouteus">Quienes somos</Link></li>
              <li className="listado-item"><Link to="/profile">{ this.state.username}</Link></li>
              <li className="listado-item"><Link to="/" onClick={logOut}>Logout</Link></li>
              <li className="listado-item"><Link to='/card'>Añadir al carrito</Link></li>
            </ul>
          );
      }else{
        return(
          <ul>
            <li className="listado-item"><Link to="/Contact">Contact</Link></li>
            <li className="listado-item"><Link to="/CoffeeList">Cafes</Link></li>
            <li className="listado-item"><Link to="/BooksList">Books</Link></li>
            <li className="listado-item"><Link to="/abouteus">Quienes somos</Link></li>
            <li className="listado-item"><Link to="/SingUp">Registrarse</Link></li>
            <li className="listado-item"><Link to="/login">Iniciar Sesión</Link></li>
            <li className="listado-item"><Link to='/card'>Añadir al carrito</Link></li>
          </ul>
        );
      }
    }

    render() {   
        return (
        <div>
        <header id="header" role="header" className="grid-header">
        <div className="grid-header-logo">
          <div id="rankinglist"></div>
          <Link title="App StyleCoffee" role="link" aria-valuetext="Ranking List" to="/">
            <h1> 
              <img role="img" src="./assets/photos/logo.png" width="50px"  alt="Logo del Ranking Students"/>
              <span className="header-title"> StyleCoffee</span>
            </h1>
          </Link>  
        </div>
        <nav id="menu" className="header-menu" role="menu">
              {this.menulogin()}
              {this.props.children}
        </nav>
      </header>
        </div>
        );
    }

}

const mapStateToProps = (state) => {
  return { authenticated: state.loginReducer.authenticated,username: state.loginReducer.user }
};

export default connect(mapStateToProps)(Header);