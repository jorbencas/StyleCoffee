import React from 'react';
import { Link } from "react-router";
import {connect} from 'react-redux';
import { loadlistCoffees, loadListBooks } from '../../actions';

const Categorys = ({loadlistCoffees, loadListBooks}) => {

        return (
          <div>
               <h1>Tenga el placer de probar toda clase de cafés</h1>
                <ul id="list">
                    <li className="item"><Link className="coffee" to={'/coffees/capuchino'} onClick={(event)=>{loadlistCoffees('capuchino'); debugger;}}>
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>Capuchino</Link></li>
                    <li className="item coffee"><Link to={'/coffees/capuchino'} onClick={()=>{loadlistCoffees('capuchino')}}>
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/> Bombón</Link></li>
                    <li className="item coffee"><Link to={'/coffees/capuchino'} onClick={()=>{loadlistCoffees('capuchino')}}>
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>Descafeinado</Link></li>
                    <li className="item coffee"><Link to={'/coffees/capuchino'} onClick={()=>{loadlistCoffees('capuchino')}}>
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>Cortado</Link></li>
                    <li className="item coffee"><Link to={'/coffees/capuchino'} onClick={()=>{loadlistCoffees('capuchino')}}>
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>Café solo</Link></li>
                    <li className="item coffee"><Link to={'/coffees/capuchino'} onClick={()=>{loadlistCoffees('capuchino')}}>
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>Cafe con leche</Link></li>
                    <li className="itemn coffee"><Link to={'/coffees/capuchino'} onClick={()=>{loadlistCoffees('capuchino')}}>
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/> Expreso Doble</Link></li>
                    <li className="item coffee"><Link to={'/coffees/capuchino'} onClick={()=>{loadlistCoffees('capuchino')}}>
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/> Café Jamaicano</Link></li>
                    <li className="item coffee"><Link to={'/coffees/capuchino'} onClick={()=>{loadlistCoffees('capuchino')}}>
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/> Làgrima</Link></li>
                    <li className="item coffee"><Link to={'/coffees/capuchino'} onClick={()=>{loadlistCoffees('capuchino')}}>
                    <img src="./assets/photos/cafe.png" width="140px" height="190px" alt=""/>
                    <br/>Instantaneo</Link></li>
                </ul> 
                <h1>Disfrute de sus generos favoritos</h1>
                <ul id="list">
                    <li className="item"><Link className="book" to={'/coffees/capuchino'} onClick={()=>{loadListBooks('capuchino')}}>
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/>Novela Contemporania</Link></li>
                    <li className="item"><Link className="book" to={'/coffees/capuchino'} onClick={()=>{loadListBooks('capuchino')}}>
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/>Libros de Auto ayuda</Link></li>
                    <li className="item"><Link className="book" to={'/coffees/capuchino'} onClick={()=>{loadListBooks('capuchino')}}>
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/> Infantil</Link></li>
                    <li className="item"><Link className="book" to={'/coffees/capuchino'} onClick={()=>{loadListBooks('capuchino')}}>
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/> Novela Juvenil</Link></li>
                    <li className="item"><Link className="book" to={'/coffees/capuchino'} onClick={()=>{loadListBooks('capuchino')}}>
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/> Comedia</Link></li>
                    <li className="item"><Link className="book" to={'/coffees/capuchino'} onClick={()=>{loadListBooks('capuchino')}}>
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/>  Thriller</Link></li>
                    <li className="item"><Link className="book" to={'/coffees/capuchino'} onClick={()=>{loadListBooks('capuchino')}}>
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/> Acción</Link></li>
                    <li className="item"><Link className="book" to={'/coffees/capuchino'} onClick={()=>{loadListBooks('capuchino')}}>
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/> Romance</Link></li>
                    <li className="item"><Link className="book" to={'/coffees/Drama'} onClick={(event)=>{loadListBooks('Drama')}}>
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/> Drama</Link></li>
                    <li className="item"><Link className="book" to={'/coffees/Novela Negra'} onClick={(event)=>{loadListBooks('Novela Negra')}}>
                    <img src="./assets/photos/libro.png" width="185px" height="170px" alt=""/>
                    <br/> Novela Negra</Link></li>
                </ul> 
          </div>
        );
}

const mapStateToProps= state => {
    console.log(state);
    return {
      user:state.loginReducer.user
    };
  }

const mapDispatchToProps = ({dispatch, event})=>{
    if(event != undefined){
        if(event.target.className === 'book'){
            console.log(event.target.className);
            debugger;
            return{
                loadListBooks(param){
                dispatch(loadListBooks(param));
                }
            }
        }else if (event.target.className === 'coffee'){
            console.log(event.target.className);
            debugger;
            return{
                loadlistCoffees(param){
                dispatch(loadlistCoffees(param));
                }
            }
        }
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(Categorys);