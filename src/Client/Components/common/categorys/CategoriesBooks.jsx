import React from 'react';
import { Link } from "react-router";
import {connect} from 'react-redux';
import {loadListBooks } from '../../../actions';

const CategorysBooks = ({loadListBooks}) => {

        return (
          <div>
                <ul id="list">
                    <li className="item"><Link className="book" to={'/books/capuchino'} onClick={()=>{loadListBooks('capuchino')}}>
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/>Novela Contemporania</Link></li>
                    <li className="item"><Link className="book" to={'/books/capuchino'} onClick={()=>{loadListBooks('capuchino')}}>
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/>Libros de Auto ayuda</Link></li>
                    <li className="item"><Link className="book" to={'/books/capuchino'} onClick={()=>{loadListBooks('capuchino')}}>
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/> Infantil</Link></li>
                    <li className="item"><Link className="book" to={'/books/capuchino'} onClick={()=>{loadListBooks('capuchino')}}>
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/> Novela Juvenil</Link></li>
                    <li className="item"><Link className="book" to={'/books/capuchino'} onClick={()=>{loadListBooks('capuchino')}}>
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/> Comedia</Link></li>
                    <li className="item"><Link className="book" to={'/books/capuchino'} onClick={()=>{loadListBooks('capuchino')}}>
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/>  Thriller</Link></li>
                    <li className="item"><Link className="book" to={'/books/capuchino'} onClick={()=>{loadListBooks('capuchino')}}>
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/> Acción</Link></li>
                    <li className="item"><Link className="book" to={'/books/capuchino'} onClick={()=>{loadListBooks('capuchino')}}>
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/> Romance</Link></li>
                    <li className="item"><Link className="book" to={'/books/Drama'} onClick={()=>{loadListBooks('Drama')}}>
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/> Drama</Link></li>
                    <li className="item"><Link className="book" to={'/books/Novela Negra'} onClick={()=>{loadListBooks('Novela Negra')}}>
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/> Novela Negra</Link></li>
                </ul> 
          </div>
        );
}

const mapStateToProps= state => {
    //console.log(state);
    return {
      user:state.loginReducer.user
    };
  }

const mapDispatchToProps = dispatch =>{
            return{
                loadListBooks(param){
                dispatch(loadListBooks(param));
                }
            }
    }

export default connect (mapStateToProps,mapDispatchToProps)(CategorysBooks);