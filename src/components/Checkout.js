import React from 'react'
import PayPalBtn from './PayPalBtn';

import styled from 'styled-components';

const StyledCheckout = styled.div`
  color: white;
  h2 {
    padding: 1rem 0;
    font-size: 3rem;
    text-transform: uppercase;
    color: white;
  }
`;

// paymentHandler = (details, data) => {
//   /** Here you can call your backend API
//     endpoint and update the database */
//   console.log(details, data);
// }

const paymentHandler = () => console.log("Success!");

export default function Checkout(props) {
  const {payAmount, donationType} = props;

  return (
    <StyledCheckout classname="component-container">
      <h2>
        CHECKOUT
      </h2>
      <form>
        <label>
          Name:
          <input
            name="name" 
            
          /><br />
        </label>
        <label>
          Email address:
          <input name="email" /><br />
        </label>
        <label>
          Phone number:
          <input name="phone" /><br />
        </label>
        <p>Donation amount: </p>
        <p>Donation type: </p>
      </form>

      <div className="payment-div">
        <h4>Select a payment type:</h4>
        <PayPalBtn
          amount = {payAmount}
          currency = {'USD'}
          onSuccess={paymentHandler}/>
      </div>
    </StyledCheckout>
  )
}
