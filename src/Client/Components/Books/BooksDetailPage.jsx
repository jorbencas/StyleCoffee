import React from 'react';
import {connect} from 'react-redux'
import {AddtoCard} from '../../actions/index';
import { Link } from "react-router";
import { getCookie, setCookie } from '../../lib/utils.js';

const  kind = 'books';
const mapStateToProps= state => {
  return {
    detail:state.booksdetails.books,
    user: state.SingUpReducer.user.role
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
          return detail.map( (item, i) => 
            <section key={i} className="row">
              <article className="col-md-15 text-center">
                <p>{item.state}</p>
                <img src={item.image} width="320px" height="380px" alt="./assets/photos/libro.png"/>
              </article>
              <article className="col-md-8">
                <section className="booksheader">
                  <article>
                    <p className="booktitle">{item.title} ({item.format}) </p>
                    <p className="booktitle">Autor: {item.author}</p>
                  </article>
                  <article>
                    <button className="btn btn-primary"><i className="fa fa-heartbeat"></i> Favoritos</button> 
                  </article>
                </section>
                  <section className="row"> 
                    <article className="col-md-5 text-left">
                      <p>Año de publicación:{item.yearpublication}</p>
                      <p>Idioma: {item.languaje}</p>
                      <p>Edición: {item.edition}</p>
                      <p>Genero: {item.genere}</p>
                      <p>ISBN: {item.isbn}</p>
                      <p className="detail-price">{item.price}€</p>
                    </article>
                    <article className="col-sm-7">
                      <p>{item.description}</p>
                    </article> 
                  </section>
                    <section className="buttons-details">
                    <Link to= {'/reservebook/' + item.id } className="btn btn-primary"><i className="fa fa-bookmark"></i> Reserva-lo</Link>
                    <Link to= {user === 'user'?'/card':'/login'} onClick={()=>{AddtoCard(kind,item)}} className="btn btn-primary"><i className="fa fa-cart-plus"></i> Añadir al carrito</Link>
                  </section>
                </article>
            </section>
          )
    }

    return (
      <div>
        <div className="container-fluid">
          <div className="list">{ detail == undefined ?'No se ha podido cargar el libro':render()}</div>
        </div>
      </div>
    );
    
}

export default connect (mapStateToProps,mapDispatchToProps) (BooksDetailPage);