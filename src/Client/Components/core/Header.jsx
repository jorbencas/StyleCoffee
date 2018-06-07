import React from 'react';
import { Link } from "react-router";
import { getCookie, setCookie } from '../../lib/utils.js';
import { logout, listreserves, categoriesbook, categoriescoffee, profile } from '../../actions/index';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

const mapStateToProps = (state) => {
    return { authenticated: state.loginReducer.authenticated,
            username: state.SingUpReducer.user.username }
  };
  
  const mapDispatchToProps = (dispatch) =>{
    return bindActionCreators({profile, logout,listreserves, categoriesbook, categoriescoffee}, dispatch);
  }
  
  class Header extends React.Component {
      constructor({props, username, authenticated}){
          super(props);  
          
          this.state = {
            authenticated:'',
            username:'',
            subject:'',
            path:'/books/',
            action:'loadListBooks'
          }

          this.handleInputChange = this.handleInputChange.bind(this); 
          this.handleClick = this.handleClick.bind(this);  
          this.menulogin = this.menulogin.bind(this); 
      }    
  
      componentWillReceiveProps(nextProps){
        this.setState({
          authenticated: nextProps.authenticated?nextProps.authenticated:'',
          username:nextProps.username?nextProps.username:''
          });
      }
  
      componentDidMount(){
        $('.rdb1').removeClass('btn-default').addClass('btn-primary');
        setCookie('kindsearch','true',12);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.value;
        const name = target.name;
       
        this.setState({
            subject: value
        });
        console.log(this.state);

    }

    handleClick(event){
        event.preventDefault();
        if ($('.rdb1').hasClass('btn-primary') && (getCookie('kindsearch') == 'false')) {
            $('.rdb1').removeClass('btn-primary').addClass('btn-default');
        }
        let that = this;

        $('#books').on('click', function(){
            if (getCookie('kindsearch') == 'false'){
                console.log(getCookie('kindsearch'));
                $('.rdb2').removeClass('btn-primary').addClass('btn-default');
                $('.rdb1').removeClass('btn-default').addClass('btn-primary');
                setCookie('kindsearch','true',12);  
                that.setState({path:'/books/'});
                that.setState({action:'loadListBooks'});
            }
        });
    
        $('#coffees').on('click', function() {
            if (getCookie('kindsearch') == 'true') {
                console.log(getCookie('kindsearch'));
                $('.rdb1').removeClass('btn-primary').addClass('btn-default');
                $('.rdb2').removeClass('btn-default').addClass('btn-primary');
                setCookie('kindsearch','false',12); 
                that.setState({path:'/coffees/'});
                that.setState({action:'loadlistCoffees'});
            }
        });
    }

      menulogin(){
        if(this.state.authenticated == true ){
            return(
              <ul className="nav">
                <li className="listado-item" title="Botón para acceder al contacto"><Link to="/Contact">Contacto</Link></li>
                <li className="listado-item" title="Haz click para acceder a la lista de cafes"><Link to="/CoffeeList"><i className="fa fa-coffee"></i>Cafes</Link></li>
                <li className="listado-item" title="Haz click para acceder a la lista de libros"><Link to="/BooksList"><i className="fa fa-book"></i>Libros</Link></li>
                <li className="listado-item" title="Haz click sobre este boton para saber mas sobre StyleCoffee"><Link to="/abouteus"><i className="fa fa-users">AbouteUs</i></Link></li>
                <li className="listado-item" title="con este boton podres ver tu perfil de usuario"><Link to="/profile" onClick={() => {this.props.profile();}}><i className="fa fa-user"></i>{ this.state.username}</Link></li>
                <li className="listado-item" title="Para salir de la sesión"><Link to="/" onClick={ () => {this.props.logout();}}> <i className='fa fa-sign-out'></i></Link></li>
                <li className="listado-item" title="Al hacer clic aqui podras ver tu carrito"><Link to='/card'><i className="fa fa-cart-arrow-down"></i></Link></li>
                <li className="listado-item" title="Para ver todas tus reservas"><Link to='/listreserve' onClick={() => {this.props.listreserves();}}><i className="fa fa-bookmark"></i></Link></li>
              </ul>
            );
        }else{
          return(
            <ul className="nav">
              <li className="listado-item" title="Botón para acceder al contacto" ><Link to="/Contact">Contact</Link></li>
              <li className="listado-item" title="Haz click para acceder a la lista de cafes" ><Link to="/CoffeeList"><i className="fa fa-coffee"></i>Cafes</Link></li>
              <li className="listado-item" title="Haz click para acceder a la lista de libros" ><Link to="/BooksList"><i className="fa fa-book"></i>Books</Link></li>
              <li className="listado-item" title="Haz click sobre este boton para saber mas sobre StyleCoffee" ><Link to="/abouteus">Quienes somos</Link></li>
              <li className="listado-item"><Link to="/SingUp"> <i className="fa fa-user"> </i> Registrarse</Link></li>
              <li className="listado-item"><Link to="/login"> <i className="fa fa-user-circle"> </i> Iniciar Sesión</Link></li>
            </ul>
          );
        }
      }
  
      render() {  
        const param = this.state.path + this.state.subject; 
          return (
          <div className="grid-header">
            <header id="header" title="header">
                <nav className="navbar navbar-inverse navbar-fixed-top">
                    <div className="container-fluid">
                        <div id="rankinglist" className="navbar-header">
                        <Link className="navbar-brand" title="App StyleCoffee" title="link" aria-valuetext="Ranking List" to="/">
                            <h5><img title="img" src="./photos/logo.png" width="20px"  alt="Logo del Ranking Students"/>
                            <span> StyleCoffee</span> </h5>
                        </Link>
                        </div>
                        <nav id="menu" role="menu" title="menu">
                            {this.menulogin()}
                            {this.props.children}
                        </nav>
                        <form className="navbar-form navbar-right">
                            <div className="input-group">
                                <section className="input-group-btn">
                                    <button  className=" rdb1 btn btn-default fa fa-book" onClick={this.handleClick} id="books"></button>
                                    <button  className=" rdb2 btn btn-default fa fa-coffee" onClick={this.handleClick} id="coffees"></button>
                                </section>
                                <input type="text" className="form-control" placeholder="Search" name="search" onChange={this.handleInputChange}/>
                                <div className="input-group-btn">
                                <button className="btn btn-default" type="submit">
                                    <Link to={param} onClick={ () => {this.state.action==='loadListBooks'?this.props.categoriesbook(this.state.subject):this.props.categoriescoffee(this.state.subject);}}>
                                        <i className="fa fa-search"></i>
                                    </Link>
                                </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </nav>
            </header>
          </div>
          );
      }
  
  }

export default connect(mapStateToProps,mapDispatchToProps)(Header);