import React, { useState } from 'react'

import styled from 'styled-components';
import PayPalTest from './PayPalTest';


const StyledDonate = styled.div`
max-width: 90%;
margin: 0 auto;
padding-top: 50px;
padding-bottom: 3rem;
color: white;
label {
  width: 300px;
}
input {
  width: 300px;
}
h2 {
  font-weight: 700;
  font-size: 3rem;
  color: white;
  margin: 3rem auto 1rem auto;
  text-transform: uppercase;
}
h3 {
  margin-bottom: 2rem;
  font-size: 2rem;
  text-transform: uppercase;
}
.payment-div {
  width: 300px;
  max-width: 80%;
  margin: 2rem auto;
}
button {
  margin: 1rem 0;
}
`;

const initialValues = {
  name: '',
  email: '',
  phone: '',
  amount: '',
}

export default function Donate() {
  const [checkout, setCheckout] = useState(false);
  const [formValues, setFormValues] = useState(initialValues)

  const handleSubmit = e => {
    e.preventDefault();
    setCheckout(true);
    //this is where we will send the info captured on the form to be 
  }

  return (
    <StyledDonate className="component-container">
      <h2>
        VALLEY FOR ALL
      </h2>
      <h3>
        DONATE
      </h3>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name="name" 
            type="text"
            required
          /><br />
        </label>
        <label>
          Email address:
          <input type="email" name="email" required/><br />
        </label>
        <label>
          Phone number:
          <input type="tel" name="phone" /><br />
        </label>
        <label>
          Donation amount:
          <input type="number" name="amount" required/><br />
        </label>
        <button className="checkout-button">Continue</button>
      </form>

      <div className="payment-div">
        {/* <PayPalBtn
          amount = {payAmount}
          currency = {'USD'}
          onSuccess={paymentHandler}/> */}
      </div>
      {(checkout === true) 
        ? <div className="payment-div">
          <h4>Select a payment type:</h4>
          <PayPalTest 
            total={formValues.amount}
          />
        </div> 

        : ''
      }
    </StyledDonate>
  )
}