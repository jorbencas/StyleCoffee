import React from 'react';
import {connect} from 'react-redux'
import {AddtoCard} from '../../actions/index';
import { Link } from "react-router";
const  kind = 'books';
const mapStateToProps= state => {
  return {
    detail:state.booksdetails.books,
    user: state.SingUpReducer.user.user.role
  };
}

const mapDispatchToProps = dispatch =>{
  return{
    AddtoCard(kind,detail){
      dispatch(AddtoCard(kind,detail));
    }
  }
}


const BooksDetailPage  = ({detail,user,AddtoCard}) => {

    function render() {             
          return detail.map( (item) => 
            <section className="itembook">
              <article className="bookfoto">
                <p>{item.state}</p>
                <img src={item.image} width="320px" height="380px" alt="./assets/photos/libro.png"/>
              </article>
              <article className="bookinfo-details">
                <section className="booksheader">
                  <article>
                    <p className="booktitle">{item.title} ({item.format}) </p>
                    <p className="booktitle">Autor: {item.author}</p>
                  </article>
                  <article>
                    <a className="button">Favoritos</a>
                  </article>
                </section>
                  <section className="Bookdetails"> 
                    <article className="d2">
                      <p>Año de publicación:{item.yearpublication}</p>
                      <p>Idioma: {item.languaje}</p>
                      <p>Edición: {item.edition}</p>
                      <p>Genero: {item.genere}</p>
                      <p>ISBN: {item.isbn}</p>
                    </article>
                    <article className="d1">
                      <p>{item.description}</p>
                    </article> 
                  </section>
                  <section className="buttons-details">
                    <p className="detail-price">{item.price}€</p>
                    <Link to= {'/reservebook/' + item.id } className="btn-search">Reserva-lo</Link>
                    <Link to= {user === 'user'?'/card':'/login'} onClick={()=>{AddtoCard(kind,item)}} className="btn-search">Añadir al carrito</Link>
                  </section>
                </article>
              </section>
          )
    }

    return (
      <div>
        <div className="grid-main">
          <div>{ detail == undefined ?'No se ha podido cargar el libro':render()}</div>
        </div>
      </div>
    );
    
}

export default connect (mapStateToProps,mapDispatchToProps) (BooksDetailPage);