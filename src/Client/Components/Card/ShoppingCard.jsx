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
		var contenido = $(".comentario").html();
 		console.log( $(".comentario").html());
		/*if (contenido.length > caracteresAMostrar) {
			var resumen = contenido.substr(0, caracteresAMostrar);
			var todo = contenido.substr(caracteresAMostrar, contenido.length - caracteresAMostrar);
			var nuevocontenido = resumen + '<span class="complete">' + todo + '</span><br><span class="more">Leer mas...</span>';
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
        return cart.cart.map((item) => (
						<tr>
							<td data-th="Product">
								<div class="row">
									<div class="col-sm-2 hidden-xs"><img src={item.image == undefined ?"http://placehold.it/100x100":item.image } width="100px" height="185px" alt="..." class="img-responsive"/></div>
									<div class="col-sm-10">
										<h4 class="nomargin">{ item.title }</h4>
										<span className="comentario" onChange={handleviewtext()}>{item.description}<br/> </span>
									</div>
								</div>
							</td>
							<td data-th="Price">{item.price}€</td>
							<td data-th="Quantity">
								<input type="number" class="form-control text-center" value="1"/>
							</td>
							<td data-th="Subtotal" class="text-center">{item.price}</td>
							<td class="actions" data-th="">
								<button class="btn btn-info btn-sm"><i class="fa fa-refresh"></i></button>
								<button class="btn btn-danger btn-sm">
                <Link to='/card' role="eliminar un elemento del carrito" className="btn-search" onClick={()=>{RemoveFromcard(item)}}><i class="fa fa-trash-o"></i></Link>
                </button>								
							</td>
						</tr>
          ));
        }

          return (
            <div className="grid-main" id="listbooks">
            	<table id="cart" class="table table-hover table-condensed">
    				<thead>
						<tr>
							<th Style="width:50%">Product</th>
							<th Style="width:10%">Price</th>
							<th Style="width:8%">Quantity</th>
							<th Style="width:22%" class="text-center">Subtotal</th>
							<th Style="width:10%"></th>
						</tr>
					</thead>
          <tbody>
            { cart.cart.length > 0 ? render():'El carrito esta vacio!!' }
					</tbody>
					<tfoot>
						<tr class="visible-xs">
							<td class="text-center"><strong>Total de productos en el carrito: {cart.cart.length}</strong></td>
						</tr>
						<tr>
							<td><a href="#" class="btn btn-warning"><i class="fa fa-angle-left"></i> Continue Shopping</a></td>
							<td colspan="2" class="hidden-xs"></td>
							<td class="hidden-xs text-center"><strong>Total {cart.total} €</strong></td>
							<td><Link to='/buy' class="btn btn-success btn-block" onClick={()=>{ saveproductscardtobuy()}}>Checkout <i class="fa fa-angle-right"></i></Link> </td>
						</tr>
					</tfoot>
				</table>
            </div>
          );
}

export default connect (mapStateToProps,mapDispatchToProps)(ShoppingCard);




              
