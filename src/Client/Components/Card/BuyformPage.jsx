//import token from '../../../../';
var StripeComponent = React.createClass({
	getInitialState: function () {
  	return {
    	card: {
      number: '',
      cvc: '',
      exp_month: '',
      exp_year: ''
      }
		}    
  },

  componentDidMount: function () {
  	Stripe.setPublishableKey(); // set your test public key
  },

  handleSubmit: function (e) {
    e.preventDefault();
    Stripe.createToken(this.state.card, function (status, response) {
    	console.log( status, response );      
    });
  },
    
	handleChange: function (e) {
    let card = this.state.card;
    card[e.target.name] = e.target.value
    this.setState(card);
	},

  render: function() {
    return <form onSubmit={ this.handleSubmit }>
      <input type="text" size="20" name="number" onChange={this.handleChange} />
      <input type="text" size="4" name="cvc" onChange={this.handleChange} />
      <input type="text" size="2" name="exp_month" onChange={this.handleChange} />
      <input type="text" size="4" name="exp_year" onChange={this.handleChange} />
      <button type="submit">Pay</button>
    </form>
  }
});

ReactDOM.render(
	<StripeComponent />, document.getElementById('container')
);