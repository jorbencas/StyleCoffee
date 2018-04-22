import React from 'react';
import { Link } from "react-router";
import {connect} from 'react-redux'
import {booksdetail} from '../../actions/index';
//import App from '../App';

const BooksListPage = (books,booksdetail) => {

    const details = () => {
      console.log('TODO Action:' + id);

    }

    /*
     function editable(id){
        console.log(id);
        if (localStorage.getItem('token')) {
          return(
            <section className="buttons">
              <Link className="button" to={'/BooksList/Book/'+id}>Editar</Link>
              <Link className="button" to={'/BooksList/Book/'+id}>Eliminar</Link>
            </section>
          );
        }else{
          return(
            <section className="buttons">
            <Link className="button" to={'/BooksList/Book/'+id} onClick={booksdetail(id)}>Leer Más</Link>
          </section>
          );
        }
      }*/

      function mangment(){
        if(localStorage.getItem('token')){
          return(
            <section>
              <Link className="button" to={'/BooksList/Book/' + 1}>Crear un nuevo libro</Link>
              <Link className="button" to={'/BooksList/Book/' + 1}>Eliminar todos</Link>
            </section>
          );
        }
      }
    function render() { 
        console.log(books.books);              
        return books.books.map((item) => (
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
                  
                  <Link className="button" to={'/BooksList/Book/'+item.id} onClick={() => { booksdetail(item.id)}}>Leer Más</Link>
                </article>
            </section>
          ));
        }
/*{editable(item.id)}*/



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
      console.log('id'+ item.id);
      debugger;
      dispatch(booksdetail(id));
    }
  }
}
export default connect (mapStateToProps,mapDispatchToProps)(BooksListPage);