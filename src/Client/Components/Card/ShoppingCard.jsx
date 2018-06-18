import React from 'react';
import { Link } from "react-router";
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {RemoveFromcard,getCart} from '../../actions/index';
import _ from 'underscore';
let item = [];

const mapStateToProps = state => {
  console.log(state);
  return { 
    cart: getCart(state.ShoppingCardReducer.cart)
  };
}

const mapDispatchToProps = dispatch =>{
  return bindActionCreators({RemoveFromcard}, dispatch);
}

const ShoppingCard = ({cart,RemoveFromcard,BuyProduct}) => {

  function handleviewtext(){
    var caracteresAMostrar = 300;
		var contenido = $("#comentario").html();
 		console.log( $("#comentario").html());
		/*if (contenido.length > caracteresAMostrar) {
			var resumen = contenido.substr(0, caracteresAMostrar);
			var todo = contenido.substr(caracteresAMostrar, contenido.length - caracteresAMostrar);
			var nuevocontenido = resumen + '<span className="complete">' + todo + '</span><br><span className="more">Leer mas...</span>';
			$(".comentario").html(nuevocontenido);				
		}*/
  }
  function saveproductscardtobuy(){
    let cartitem = JSON.parse(localStorage.getItem('item'));
    console.log( cartitem.length + '   ' + cart.cart.length)
    if(cartitem.length !== cart.cart.length){
      cart.cart.forEach(element => {
       let kind = '';
        element.genere ? kind = 'books':kind = 'coffe';
        if ((cartitem[0] !== element)) {
          cartitem.push( {'kind':kind,'id':element.id,'token':0});
          console.log(cartitem);
          localStorage.setItem('item',JSON.stringify(cartitem));
        }
      });
    }
  }

    function render() { 
      console.log(cart.cart);              
        return cart.cart.map((item, i) => (
						<tr key={i}>
							<td data-th="Product">
								<div className="row">
									<div className="col-sm-2 hidden-xs"><img src={item.image == undefined ?"http://placehold.it/100x100":item.image } width="100px" height="185px" alt="..." className="img-responsive"/></div>
									<div className="col-sm-10">
										<h4 className="nomargin">{ item.title }</h4>
										<span id="comentario" onChange={this.handleviewtext}><p>{item.description}<br/></p></span>
									</div>
								</div>
							</td>
							<td data-th="Price">{item.price}€</td>
							<td data-th="Quantity">
								<input type="number" className="form-control text-center" value="1"/>
							</td>
							<td data-th="Subtotal" className="text-center">{item.price}</td>
							<td className="actions" data-th="">
								<button className="btn btn-info btn-sm"><i className="fa fa-refresh"></i></button>
								<button className="btn btn-danger btn-sm">
                <Link to='/card' role="eliminar un elemento del carrito" className="btn-search" onClick={()=>{RemoveFromcard(item)}}><i className="fa fa-trash-o"></i></Link>
                </button>								
							</td>
						</tr>
          ));
        }

          return (
            <div className="grid-main" id="listbooks">
            	<table id="cart" className="table table-hover table-condensed">
    				<thead>
						<tr>
							<th style={{width:'50%'}}>Product</th>
							<th style={{width:'10%'}}>Price</th>
							<th style={{width:'8%'}}>Quantity</th>
							<th style={{width:'22%'}} className="text-center">Subtotal</th>
							<th style={{width:'10%'}}></th>
						</tr>
					</thead>
          <tbody>
            { cart.cart.length > 0 ? render():'El carrito esta vacio!!' }
					</tbody>
					<tfoot>
						<tr className="visible-xs">
							<td className="text-center"><strong>Total de productos en el carrito: {cart.cart.length}</strong></td>
						</tr>
						<tr>
							<td><a href="#" className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</a></td>
							<td colSpan="2" className="hidden-xs"></td>
							<td className="hidden-xs text-center"><strong>Total {cart.total} €</strong></td>
							<td><Link to='/buy' className="btn btn-success btn-block" onClick={()=>{ saveproductscardtobuy()}}>Checkout <i className="fa fa-angle-right"></i></Link> </td>
						</tr>
					</tfoot>
				</table>
            </div>
          );
}

export default connect (mapStateToProps,mapDispatchToProps)(ShoppingCard);




              
