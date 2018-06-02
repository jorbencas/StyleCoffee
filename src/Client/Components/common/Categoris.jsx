import React from 'react';
import { categoriesbook, categoriescoffee } from '../../actions';
import { bindActionCreators } from 'redux';
import {connect} from 'react-redux';
import { Link } from "react-router";

const mapStateToProps = state => {
  return {
    user:state.loginReducer.user
  };
}

const mapDispatchToProps = dispatch =>{
  return bindActionCreators({categoriesbook,categoriescoffee}, dispatch);
}

const Categorys = ({categoriesbook, categoriescoffee}) => {

        return (
          <div>
            <h1>Tenga el placer de probar toda clase de cafés</h1>
              <ul id="list">
                    <li className="item"><Link className="coffee" to={'/coffees/capuchino'} onClick={()=>{categoriescoffee('capuchino')}}>
                    <img src="./photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>Capuchino</Link></li>
                    <li className="item coffee"><Link to={'/coffees/capuchino'} onClick={()=>{categoriescoffee('capuchino')}}>
                    <img src="./photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/> Bombón</Link></li>
                    <li className="item coffee"><Link to={'/coffees/capuchino'} onClick={()=>{categoriescoffee('capuchino')}}>
                    <img src="./photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>Descafeinado</Link></li>
                    <li className="item coffee"><Link to={'/coffees/capuchino'} onClick={()=>{categoriescoffee('capuchino')}}>
                    <img src="./photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>Cortado</Link></li>
                    <li className="item coffee"><Link to={'/coffees/capuchino'} onClick={()=>{categoriescoffee('capuchino')}}>
                    <img src="./photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>Café solo</Link></li>
                    <li className="item coffee"><Link to={'/coffees/capuchino'} onClick={()=>{categoriescoffee('capuchino')}}>
                    <img src="./photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>Cafe con leche</Link></li>
                    <li className="itemn coffee"><Link to={'/coffees/capuchino'} onClick={()=>{categoriescoffee('capuchino')}}>
                    <img src="./photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/> Expreso Doble</Link></li>
                    <li className="item coffee"><Link to={'/coffees/capuchino'} onClick={()=>{categoriescoffee('capuchino')}}>
                    <img src="./photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/> Café Jamaicano</Link></li>
                    <li className="item coffee"><Link to={'/coffees/capuchino'} onClick={()=>{categoriescoffee('capuchino')}}>
                    <img src="./photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/> Làgrima</Link></li>
                    <li className="item coffee"><Link to={'/coffees/capuchino'} onClick={()=>{categoriescoffee('capuchino')}}>
                    <img src="./photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>Instantaneo</Link></li>
              </ul> 
            <h1>Disfrute de sus generos favoritos</h1>
            <ul id="list">
                    <li className="item"><Link className="book" to={'/books/capuchino'} onClick={()=>{categoriesbook('capuchino')}}>
                    <img src="./photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/>Novela Contemporania</Link></li>
                    <li className="item"><Link className="book" to={'/books/capuchino'} onClick={()=>{categoriesbook('capuchino')}}>
                    <img src="./photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/>Libros de Auto ayuda</Link></li>
                    <li className="item"><Link className="book" to={'/books/capuchino'} onClick={()=>{categoriesbook('capuchino')}}>
                    <img src="./photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/> Infantil</Link></li>
                    <li className="item"><Link className="book" to={'/books/capuchino'} onClick={()=>{categoriesbook('capuchino')}}>
                    <img src="./photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/> Novela Juvenil</Link></li>
                    <li className="item"><Link className="book" to={'/books/capuchino'} onClick={()=>{categoriesbook('capuchino')}}>
                    <img src="./photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/> Comedia</Link></li>
                    <li className="item"><Link className="book" to={'/books/Thriller'} onClick={()=>{categoriesbook('capuchino')}}>
                    <img src="./photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/>  Thriller</Link></li>
                    <li className="item"><Link className="book" to={'/books/accion'} onClick={()=>{categoriesbook('capuchino')}}>
                    <img src="./photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/> Acción</Link></li>
                    <li className="item"><Link className="book" to={'/books/romantica'} onClick={()=>{categoriesbook('capuchino')}}>
                    <img src="./photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/> Romance</Link></li>
                    <li className="item"><Link className="book" to={'/books/Drama'} onClick={()=>{categoriesbook('Drama')}}>
                    <img src="./photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/> Drama</Link></li>
                    <li className="item"><Link className="book" to={'/books/Novela Negra'} onClick={()=>{categoriesbook('Novela Negra')}}>
                    <img src="./photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/> Novela Negra</Link></li>
                </ul> 
          </div>
        );
}

export default connect (mapStateToProps,mapDispatchToProps)(Categorys);