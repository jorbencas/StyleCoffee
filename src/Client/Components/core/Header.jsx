import React from 'react';
import { Link } from "react-router";
import { logout, listreserves } from '../../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux' 

const mapStateToProps = (state) => {
  return { authenticated: state.loginReducer.authenticated,username: state.loginReducer.user }
};

const mapDispatchToProps = dispatch =>{
  return bindActionCreators({logout,listreserves}, dispatch);
}

class Header extends React.Component {
    constructor({props, authenticated, username, logout, listreserves}){
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
    }

    menulogin(){
      if(this.state.authenticated == true ){
          return(
            <ul>
              <li className="listado-item" title="Botón para acceder al contacto"><Link to="/Contact">Contacto</Link></li>
              <li className="listado-item" title="Haz click para acceder a la lista de cafes"><Link to="/CoffeeList">Cafes</Link></li>
              <li className="listado-item" title="Haz click para acceder a la lista de libros"><Link to="/BooksList">Libros</Link></li>
              <li className="listado-item" title="Haz click sobre este boton para saber mas sobre StyleCoffee"><Link to="/abouteus">Quienes somos</Link></li>
              <li className="listado-item" title="con este boton podres ver tu perfil de usuario"><Link to="/profile">{ this.state.username}</Link></li>
              <li className="listado-item" title="Para salir de la sesión"><Link to="/" onClick={ () => {console.log(props); props.logout();}}>Logout</Link></li>
              <li className="listado-item" title="Al hacer clic aqui podras ver tu carrito"><Link to='/card'>Añadir al carrito</Link></li>
              <li className="listado-item" title="Para ver todas tus reservas"><Link to='/listreserve' onClick={() => {console.log(props); props.listreserves();}}>Mis libros reservados</Link></li>
            </ul>
          );
      }else{
        return(
          <ul>
            <li className="listado-item" title="Botón para acceder al contacto" ><Link to="/Contact">Contact</Link></li>
            <li className="listado-item" title="Haz click para acceder a la lista de cafes" ><Link to="/CoffeeList">Cafes</Link></li>
            <li className="listado-item" title="Haz click para acceder a la lista de libros" ><Link to="/BooksList">Books</Link></li>
            <li className="listado-item" title="Haz click sobre este boton para saber mas sobre StyleCoffee" ><Link to="/abouteus">Quienes somos</Link></li>
            <li className="listado-item"><Link to="/SingUp">Registrarse</Link></li>
            <li className="listado-item"><Link to="/login">Iniciar Sesión</Link></li>
          </ul>
        );
      }
    }

    render() {   
        return (
        <div>
        <header id="header" title="header" className="grid-header">
        <div className="grid-header-logo">
          <div id="rankinglist"></div>
          <Link title="App StyleCoffee" title="link" aria-valuetext="Ranking List" to="/">
            <h1> 
              <img title="img" src="./photos/logo.png" width="50px"  alt="Logo del Ranking Students"/>
              <span className="header-title"> StyleCoffee</span>
            </h1>
          </Link>  
        </div>
        <nav id="menu" className="header-menu" role="menu" title="menu">
              {this.menulogin()}
              {this.props.children}
        </nav>
      </header>
        </div>
        );
    }

}

export default connect(mapStateToProps)(Header);