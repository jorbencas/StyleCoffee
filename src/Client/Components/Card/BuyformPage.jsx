import {BuyProduct} from '../../actions/index';
import React from 'react';
class StripeComponent extends React.Component{
	constructor(props) {
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
    e.preventDefault();
    Stripe.createToken(this.state.card, function (status, response) {
      console.log( status, response ); 
      BuyProduct(response.id);     
    });
  };
    
	handleChange(e) {
    let card = this.state.card;
    card[e.target.name] = e.target.value
    this.setState(card);
	};

  render() {
    return(
      <form onSubmit={ this.handleSubmit }>
      <input type="text" size="20" name="number" onChange={this.handleChange} />
      <input type="text" size="4" name="cvc" onChange={this.handleChange} />
      <input type="text" size="2" name="exp_month" onChange={this.handleChange} />
      <input type="text" size="4" name="exp_year" onChange={this.handleChange} />
      <button type="submit">Pay</button>
    </form>
    ) 
  }
}

export default StripeComponent;