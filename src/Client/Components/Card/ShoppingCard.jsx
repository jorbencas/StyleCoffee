import React from 'react';
import { Link } from "react-router";
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {RemoveFromcard,getCart} from '../../actions/index';
import _ from 'underscore';
let item = [];

const mapStateToProps= state => {
  console.log(state);
  return { 
    cart: getCart(state.ShoppingCardReducer.cart)
  };
}

const mapDispatchToProps = dispatch =>{
  return bindActionCreators({RemoveFromcard}, dispatch);
}

const ShoppingCard = ({cart,RemoveFromcard,BuyProduct}) => {


  function saveproductscardtobuy(){
    let cartitem = JSON.parse(localStorage.getItem('item'));
    if(cartitem.length !== cart.cart.length){
      let cart = cart.cart;
      _.each(cart, function (item) {
        console.log(item.id);
      });
    }
  }
    function render() { 
      console.log(cart.cart);              
        return cart.cart.map((item) => (
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
                <Link  to='/card' className="btn-search" onClick={()=>{RemoveFromcard(item)}}>Eliminar</Link>
            </section>
          ));
        }

          return (
            <div className="grid-main" id="listbooks">
              <div  id="list" >{ cart.cart.length > 0 ? render():'El carrito esta vacio!!' }</div>
              <Link to='/buy' /*onClick={()=>{ saveproductscardtobuy()}}*/ className="btn-search">Comprar</Link>
              <p>Total de productos en el carrito: {cart.cart.length} <br/> Total:{cart.total} €</p>
            </div>
          );
}

export default connect (mapStateToProps,mapDispatchToProps)(ShoppingCard);




              
