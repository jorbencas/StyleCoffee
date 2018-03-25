import React from 'react';
import { Link } from "react-router-dom";
import App from './App.jsx';
import { currentUser } from '/services/services';

class Header extends React.Component {
    constructor(props){
        super(props);   
    }    

    menulogout(){

    }

    menulogin(){
      if(currentUser){
        this.render(
          
        )
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
            <ul>
              <li className="listado-item"><Link to="/Contact">Contact</Link></li>
              <li className7="listado-item"><Link to="/Coffee">Cafes</Link></li>
              <li className="listado-item"><Link to="/Books">Books</Link></li>
              <li className="listado-item"><Link to="/abouteus">Quienes somos</Link></li>
              <li className="listado-item"><Link to="/login">Iniciar Sesión</Link></li>
              <li className="listado-item"><Link to="/Books">Registrarse</Link></li>
            </ul>
            {this.props.children}
        </nav>
      </header>
        </div>
        );
    }


    










}


















export default Header;