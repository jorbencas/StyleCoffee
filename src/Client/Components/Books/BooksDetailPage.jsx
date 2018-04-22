import React from 'react';
import ReactDOM  from 'react-dom';
import {connect} from 'react-redux'
import {AddtoCard} from '../../actions/index';

const BooksDetailPage  = ({detail,AddtoCard}) => {

    function render() {   
      console.log(detail);            
          return component = detail.map((item) =>
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
                    <a className="btn-search">Comprar</a>
                  </section>
                </article>
              </section>
          )
    }

    return (
      <div>
        <div className="grid-main">
          <div>{render()}</div>
        </div>
      </div>
    );
    
}


const mapStateToProps= state => {
  console.log(state);
  return {
    detail:state.booksdetails.detail.book
  };
}

const mapDispatchToProps = dispatch =>{
  return{
    AddtoCard(id){
      dispatch(AddtoCard(id));
    }
  }
}

export default connect (mapStateToProps,mapDispatchToProps) (BooksDetailPage);