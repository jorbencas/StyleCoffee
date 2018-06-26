import React from 'react';
import { Link } from 'react-router';
import { FormErrors } from '../../lib/FormErrors';
import { hashcode } from '../../lib/utils';
import { updateprofile } from '../../actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import ListErrors from '../errors/errors';
import DatePicker from 'react-datepicker';

const mapStateToProps = state => {
  console.log(state);
  return {
    user:state.ProfileReducer.user
  };
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({updateprofile}, dispatch);
}


class ManageUsers extends React.Component {
    constructor(props){
        super(props); 
        console.log(props);
        this.state = { 
            username:props.user?props.user:[]
          };
        
          this.handleSubmit = this.handleSubmit.bind(this); 
    }    

    handleSubmit(event){
      this.props.updateprofile(this.state);
    }

    render() {  
        const cart = this.state.cart.map((item, i) => (
            <tr key={i}>
                <td data-th="Product">
                    <div className="row">
                        <div className="col-sm-2 hidden-xs"><img src={item.image == undefined ?"http://placehold.it/100x185":item.image } width="100px" height="185px" alt="..." className="img-responsive"/></div>
                        <div className="col-sm-10">
                            <h4 className="nomargin">{ item.title }</h4>
                            <div className = "contenido" onClick={this.handleviewtext}>
                                {item.description}
                            </div>
                        </div>
                    </div>
                </td>
                <td className="actions" data-th="">
                    <button className="btn btn-info btn-sm"><i className="fa fa-refresh"></i></button>
                    <button className="btn btn-danger btn-sm">
                        <Link to='/card' role="eliminar un elemento del carrito" className="btn-search" onClick={()=>{RemoveFromcard(item)}}><i className="fa fa-trash-o"></i></Link>
                    </button>								
                </td>
            </tr>
        ));       
          return (
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
                    { this.state.cart == undefined ? <tr rowSpan='5'><td>El carrito esta vacio!!</td></tr>:cart}
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
          );
    }
}


export default connect(mapStateToProps,mapDispatchToProps) (ManageUsers);