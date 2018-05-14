import React from 'react';
import StripeComponent from './ShoppingCard';

export class CreditCard extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
   
  }

  render(){
    return (
      <StripeComponent />
    );
  }
}

export default CreditCard;