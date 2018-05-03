import React from 'react';
import {connect} from 'react-redux'
import {BuyProduct} from '../../actions/index';
import { Link } from "react-router";

const mapStateToProps= state => {
  return {
    detail:state.booksdetails.books
  };
}

const mapDispatchToProps = dispatch =>{
  return{
    BuyProduct(detail){
      dispatch(BuyProduct(detail));
    }
  }
}

const BooksDetailPage  = ({detail,BuyProduct}) => {

    function render() {   
      console.log(detail);            
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
                    <a className="btn-search" >Reserva-lo</a>
                    <Link to='/buy' onClick={()=>{BuyProduct(item)}} className="btn-search">Comprar</Link>
                  </section>
                </article>
              </section>
          )
    }

    return (
      <div>
        <div className="grid-main">
          <div>{ detail == undefined?'':render()}</div>
        </div>
      </div>
    );
    
}

export default connect (mapStateToProps,mapDispatchToProps) (BooksDetailPage);