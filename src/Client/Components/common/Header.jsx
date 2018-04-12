import React from 'react';
import { Link } from "react-router";
//import App from '../App.jsx';
import { logOut } from '../../services/services';

class Header extends React.Component {
    constructor(props){
        super(props);  
        this.menulogin = this.menulogin.bind(this); 
    }    

    menulogin(){
      if( window.location.href  === "Jorge" || localStorage.getItem('token')){
          return(
            <ul>
              <li className="listado-item"><Link to="/Contact">Contact</Link></li>
              <li className="listado-item"><Link to="/CoffeeList">Cafes</Link></li>
              <li className="listado-item"><Link to="/BooksList">Books</Link></li>
              <li className="listado-item"><Link to="/abouteus">Quienes somos</Link></li>
              <li className="listado-item"><Link to="/login">{localStorage.getItem('username')}</Link></li>
              <li className="listado-item"><Link to="/" onClick={logOut}>Logout</Link></li>
            </ul>
          );
      }else{
        return(
          <ul>
            <li className="listado-item"><Link to="/Contact">Contact</Link></li>
            <li className="listado-item"><Link to="/CoffeeList">Cafes</Link></li>
            <li className="listado-item"><Link to="/BooksList">Books</Link></li>
            <li className="listado-item"><Link to="/abouteus">Quienes somos</Link></li>
            <li className="listado-item"><Link to="/SingUp">Iniciar Sesión</Link></li>
            <li className="listado-item"><Link to="/login">Registrarse</Link></li>
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

export default Header;