import React from 'react';
import { Link } from "react-router";
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'
import {RemoveFromcard,getCart} from '../../actions/index';
import _ from 'underscore';
let item = [];

const mapStateToProps = state => {
  return { 
    cart: getCart(state.ShoppingCardReducer.cart)
  };
}

const mapDispatchToProps = dispatch =>{
  return bindActionCreators({RemoveFromcard}, dispatch);
}

class ShoppingCard extends React.Component{
	constructor(props){
		super(props);

		this.state = ({
			cart:[]
		});

		this.handleviewtext = this.handleviewtext.bind(this);
		this.saveproductscardtobuy = this.saveproductscardtobuy.bind(this);
	}
/*
	componentDidMount(){
		this.handleviewtext();
	}*/

	componentWillReceiveProps(nextProps){
		console.log('Hola Mundo')
		console.log(nextProps.cart);
		this.state({
			cart:nextProps.cart.cart
		})
	}

   handleviewtext(){
		var texto, padre;
		$(".contenido").each(function(){
				texto = $(this).html();
				this.setAttribute("data-texto", texto);
				if ($(this).html().length > 75){
						$(this).html(texto.substr(0, 75) + "...").append(`<label class="mas">Leer más</label>`);
				}
		});
		$(".mas").on("click", function(){
			padre = $(this).parent();
			texto = padre.data("texto");
			$(padre)
					.html(texto)
					.css({
							height: "5rem"
					});
		});
	}
	
   saveproductscardtobuy(){
    let cartitem = JSON.parse(localStorage.getItem('item'));
    console.log( cartitem.length + '   ' + this.state.cart.length)
    if(cartitem.length !== this.state.cart.length){
      this.state.cart.forEach(element => {
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

     render() {              
        const cart = this.state.cart.map((item, i) => (
						<tr key={i}>
							<td data-th="Product">
								<div className="row">
									<div className="col-sm-2 hidden-xs"><img src={item.image == undefined ?"http://placehold.it/100x100":item.image } width="100px" height="185px" alt="..." className="img-responsive"/></div>
									<div className="col-sm-10">
										<h4 className="nomargin">{ item.title }</h4>
										<div className = "contenido">
											{item.description}
										</div>
									</div>
								</div>
							</td>
							<td data-th="Price">{item.price}€</td>
							<td data-th="Quantity">
								<input type="number" className="form-control text-center" defaultValue="1"/>
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
            { this.state.cart == undefined ? cart: <tr><td>El carrito esta vacio!!</td></tr>}
					</tbody>
					<tfoot>
						<tr className="visible-xs">
							<td className="text-center"><strong>Total de productos en el carrito: {this.state.cart.length}</strong></td>
						</tr>
						<tr>
							<td><a href="#" className="btn btn-warning"><i className="fa fa-angle-left"></i> Continue Shopping</a></td>
							<td colSpan="2" className="hidden-xs"></td>
							<td className="hidden-xs text-center"><strong>Total {this.state.cart.total} €</strong></td>
							<td><Link to='/buy' className="btn btn-success btn-block" onClick={() => {this.saveproductscardtobuy()}}>Checkout <i className="fa fa-angle-right"></i></Link> </td>
						</tr>
					</tfoot>
				</table>
            </div>
          );
        }
}

export default connect (mapStateToProps,mapDispatchToProps)(ShoppingCard);




              
