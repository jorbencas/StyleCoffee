import React from 'react';
import { Link } from "react-router";
import {connect} from 'react-redux'
import {booksdetail} from '../../actions/index';
//import App from '../App';

const BooksListPage = ({books,booksdetail}) => {

      function mangment(){
        if(localStorage.getItem('token')){
          return(
            <section>
              <Link className="button" to={'/BooksList/Book/' + 1}>Crear un nuevo libro</Link>
              <Link className="button" to={'/BooksList/Book/' + 1}>Eliminar todos</Link>
              <br/><br/>
            </section>
          );
        }
      }


    function render() { 
        console.log(books);              
        return books.map((item) => (
            <section className="itembook">
                <article className="bookfoto">
                 <div className="state"><p>{item.state}</p></div>
                  <img src={item.image} width="140px" height="215px" alt="./assets/photos/libro.png"/>
                </article>
                <article className="bookinfo">
                  <p>{ item.title }</p>
                  <p>{item.author}</p>
                  <p>{item.edition}</p>
                  <h2>{item.price}€</h2>
                  
                  <Link className="button" onClick={() => { booksdetail(item.id)}} to={'/BooksList/Book/'+item.id}>Leer Más</Link>
                </article>
            </section>
          ));
        }

          return (
            <div className="grid-main" id="listbooks">
              {mangment()}
              <div  id="list" >{ books != {} ? render():'No hay Libros!!' }</div>
            </div>
          );
}

const mapStateToProps= state => {
  console.log(state);
  return { 
    books: state.productsList.books
  };
}

const mapDispatchToProps = dispatch =>{
  return{
    booksdetail(id){
      dispatch(booksdetail(id));
    }
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(BooksListPage);