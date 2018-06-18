import {BuyProduct} from '../../actions/index';
import React from 'react';
import {connect} from 'react-redux'
import { bindActionCreators } from 'redux'


const mapStateToProps= state => {
  console.log(state);
  /*return { 
    cart: getCart(state.ShoppingCardReducer.cart)
  };*/
}

const mapDispatchToProps = dispatch =>{
  return bindActionCreators({BuyProduct}, dispatch);
}

class StripeComponent extends React.Component{
	constructor(props,BuyProduct) {
    super(props);
    console.log(props);
    this.state = {
    	card: {
      number: '',
      cvc: '',
      exp_month: '',
      exp_year: ''
      }
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
  	Stripe.setPublishableKey('pk_test_WMqiVRs7QV6k0qzCU7FCl3Ji'); // set your test public key
  };

  handleSubmit(e) {
    let that = this;
    e.preventDefault();
    Stripe.createToken(this.state.card, function (status, response) {
      console.log( status, response ); 
      that.props.BuyProduct(response.id);     
    });
  };
    
	handleChange(e) {
    let card = this.state.card;
    card[e.target.name] = e.target.value
    this.setState(card);
	};

  render() {
    return(
      <div className="grid-main">
        <div className="Contact">
          <form id="contact_form" name="contact_form" className="form-contact" onSubmit={this.handleSubmit}>
          <h1 id="heading">Comprar un producto</h1>
            <div className="contact_item">
              <label htmlFor="number">Numero de cuenta</label><br/>
              <input type="text" size="20" name="number" onChange={this.handleChange} required/>
            </div>
            <div className="contact_item">
              <label htmlFor="exp_month">Expiration Month</label><br/>
              <input type="text" size="2" name="exp_month" onChange={this.handleChange} required/>
            </div>
            <div className="contact_item">
              <label htmlFor="exp_year">Expiration Year</label><br/>
              <input type="text" size="4" name="exp_year" onChange={this.handleChange} required/>
            </div>
            <div className="contact_item">
              <label htmlFor="cvc">CVC</label><br/>
              <input type="text" size="4" name="cvc" onChange={this.handleChange} required/>
            </div>
            <div className="contact_item" /*disabled={!this.state.formValid}*/ >
              <button className="btn-search" type="submit">Pay</button>
            </div>
          </form>
        </div>
      </div>
    ) 
  }
}

export default connect (mapStateToProps,mapDispatchToProps)(StripeComponent);