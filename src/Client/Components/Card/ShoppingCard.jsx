import React from 'react';
import { Link } from "react-router";
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'

const mapStateToProps= state => {
  console.log(state);
  return { 
    cart: state.ShoppingCardReducer.cart
  };
}



const ShoppingCard = ({cart}) => {

      

    function render() {               
        return cart.map((item) => (
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
                </article>
            </section>
          ));
        }

          return (
            <div className="grid-main" id="listbooks">
              <div  id="list" >{ cart != undefined ? render():'No hay Libros!!' }</div>
            </div>
          );
}

export default connect (mapStateToProps)(ShoppingCard);