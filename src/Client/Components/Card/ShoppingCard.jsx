import React from 'react';
import { Link } from "react-router";
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {RemoveFromcard,BuyProduct,getCart} from '../../actions/index';

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
    function render() { 
      console.log(cart);              
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
          <Link to='/buy' onClick={()=>{BuyProduct(cart)}} className="btn-search">Comprar</Link>
        }

          return (
            <div className="grid-main" id="listbooks">
              <div  id="list" >{ cart != undefined ? render():'El carrito esta vacio!!' }</div>
              <p>Hay{cart.total} productos en el carrito</p>
            </div>
          );
}

export default connect (mapStateToProps,mapDispatchToProps)(ShoppingCard);




              
