import React from 'react';
import StripeComponent from './BuyformPage';

export class CreditCard extends React.Component {
  constructor(props) {
    super(props);
    console.log("Hola");
    this.state = {};
   
  }

  render(){
    return (
      <div>
        <StripeComponent />
      </div>
    );
  }
}
//
export default CreditCard;