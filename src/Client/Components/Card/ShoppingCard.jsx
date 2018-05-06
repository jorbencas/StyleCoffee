import React from 'react';
import { Link } from "react-router";
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {RemoveFromcard,BuyProduct,AddtoCard} from '../../actions/index';
import store from '../../Store';

const mapStateToProps= state => {
  console.log(state);
  return { 
    cart: state.ShoppingCardReducer.cart
  };
}

const mapDispatchToProps = dispatch =>{
  return bindActionCreators({AddtoCard,RemoveFromcard}, dispatch);
}

class ShoppingCard extends React.Component{
  constructor({props,RemoveFromcard,BuyProduct,AddtoCard}){
    super(props);

    this.state = {
      cart:this.props.cart
    }
  }

  componentWillMount(){
    let cart = JSON.parse(localStorage.getItem('cart'));
/*for (var [key, value] of cart) {*/
  if (cart === null) {
    localStorage.removeItem('cart');
    console.log(localStorage.getItem('cart'));
  }else{
    console.log(cart);
    store.dispatch({type:"ADD_TO_CART", cart:cart}); 
  }
/*}*/
  }

  componentWillReceiveProps(nextProps){
    console.log(nextProps.cart);
    this.setState({cart:nextProps.cart.cart})
  }

  componentWillUnmount(){
    localStorage.setItem('cart', JSON.stringify(this.props.cart));
    console.log(this.props.cart);
  }


    render() {  
      const Cart = this.state.cart.map((item) => (
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
          

          return (
            <div className="grid-main" id="listbooks">
              <div  id="list" >{ this.props.cart != undefined ? Cart:'El carrito esta vacio!!' }</div>
              <br/>
              <br/>
              <p>Hay{this.props.cart.total} productos en el carrito</p>
              <br/>
              <Link to='/buy' className="btn-search">Comprar</Link>
            </div>
          );
        }
}

export default connect (mapStateToProps,mapDispatchToProps)(ShoppingCard);