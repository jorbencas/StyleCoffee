import React from 'react';
import { Link } from "react-router";
import {connect} from 'react-redux'
import {booksdetail, AddtoCard} from '../../actions/index';
import { bindActionCreators } from 'redux'

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

      function editable (item){
          if(localStorage.getItem('token')){

          return(
            <section>
              <Link className="button" to={'/BooksList/Book/'+item.id}  onClick={() => { booksdetail(item.id)}} >Editar</Link>
              <Link className="button" to={'/BooksList/Book/'+item.id}  onClick={() => { booksdetail(item.id)}} >Borrar</Link>
            </section>
          )
        }else{
         return(
            <section>
              <Link className="button" to={'/BooksList/Book/'+item.id}  onClick={() => { booksdetail(item.id)}} >Leer Más</Link>
              <Link className="button" to={'/card/'+item.id}  onClick={() => { AddtoCard(item)}} >Añadir al carrito</Link>
            </section>
          ) 
        }
        
      }

    function render() {               
        return books.map( item => (
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
                  {editable(item)}
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
  return bindActionCreators({booksdetail,AddtoCard}, dispatch)
}

export default connect (mapStateToProps,mapDispatchToProps)(BooksListPage);