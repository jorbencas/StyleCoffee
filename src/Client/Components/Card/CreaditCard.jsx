import React from 'react';
import Payment from 'payment';
import { getStripeToken } from '../../lib/get-stripe-token.js';
import BuyProduct from'../../actions/index';
export class CreditCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      number: null,
      exp_month: null,
      exp_year: null,
      cvc: null,
      token: null,
    };

    this.setCardType = this.setCardType.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetCard = this.resetCard.bind(this);
  }

  resetCard() {
    this.setState({ number: null, exp_month: null, exp_year: null, cvc: null, token: null });
  }

  handleSubmit(event) {
    event.preventDefault();
    this.resetCard();

    const { refs } = this;
    const number = refs.number.value;
    const expiration = refs.expiration.value.split('/');
    const exp_month = parseInt(expiration[0], 10);
    const exp_year = parseInt(expiration[1], 10);
    const cvc = refs.cvc.value;
    const card = { number, exp_month, exp_year, cvc };

    getStripeToken(card)
    .then((token) => {
      console.log(token);
      card.token = token;
      this.setState(card);
      this.props.BuyProduct(card);
    }).catch((error) => {
      console.log(error);
    });
  }

  setCardType(event) {
    const type = Payment.fns.cardType(event.target.value);
    const cards = document.querySelectorAll('[data-brand]');

    [].forEach.call(cards, (element) => {
      if (element.getAttribute('data-brand') === type) {
        element.classList.add('active');
      } else {
        element.classList.remove('active');
      }
    });
  }

  renderCardList() {
    return (<ul className="credit-card-list clearfix">
      <li><i data-brand="visa" className="fa fa-cc-visa"></i></li>
      <li><i data-brand="amex" className="fa fa-cc-amex"></i></li>
      <li><i data-brand="mastercard" className="fa fa-cc-mastercard"></i></li>
      <li><i data-brand="jcb" className="fa fa-cc-jcb"></i></li>
      <li><i data-brand="discover" className="fa fa-cc-discover"></i></li>
      <li><i data-brand="dinersclub" className="fa fa-cc-diners-club"></i></li>
    </ul>);
  }

  renderCardForm() {
    return (<form className="CardForm" onSubmit={ this.handleSubmit }>
     
            <label>Card Number</label>
            <input
              onKeyUp={ this.setCardType }
              className="form-control"
              type="text"
              ref="number"
              placeholder="Card Number"
            />
        
            <label>Expiration</label>
            <input
              className="form-control text-center"
              type="text"
              ref="expiration"
              placeholder="MM/YYYY"
            />
          
            <label>CVC</label>
            <input
              className="form-control text-center"
              type="text"
              ref="cvc"
              placeholder="CVC"
            />
      <input type="submit" value="Generate Token"/>
    </form>);
  }

  renderCard() {
    const { number, exp_month, exp_year, cvc, token } = this.state;
    return number ? (<Alert bsStyle="info">
      <h5>{ number }</h5>
      <p className="exp-cvc">
        <span>{ exp_month }/{ exp_year }</span>
        <span>{ cvc }</span>
      </p>
      <em>{ token }</em>
    </Alert>) : '';
  }

  componentDidMount() {
    const { number, expiration, cvc } = this.refs;
    Payment.formatCardNumber(number);
    Payment.formatCardExpiry(expiration);
    Payment.formatCardCVC(cvc);
  }

  render() {
    return (<div className="CreditCard">
      { this.renderCardList() }
      { this.renderCardForm() }
      { this.renderCard() }
    </div>);
  }
}

export default CreditCard;