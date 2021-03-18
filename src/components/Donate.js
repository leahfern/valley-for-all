import React, { useState } from 'react'

import styled from 'styled-components';
import PayPalTest from './PayPalTest';


const StyledDonate = styled.div`
max-width: 90%;
margin: 0 auto;
padding-top: 50px;
color: white;
label {
  width: 300px;
}
input {
  width: 100%;
  height: 45px;
  display: block;
  font-size: 1rem;
  color: white;
  line-height: 1.2;
  border: none;
  background: transparent;
  margin: 0 auto 1rem;
  border-bottom 3px solid white;
  font-family: inherit;
  :focus {
    border: none;
    outline: none;
    border-bottom: 3px solid #009FF7;
  }
}
h2 {
  font-weight: 700;
  font-size: 3rem;
  color: white;
  margin: 3rem auto 1rem auto;
  text-transform: uppercase;
}
h3 {
  margin-bottom: 3rem;
  font-size: 2rem;
  text-transform: uppercase;
}
 h4 {
   font-size: 1.2rem;
   margin-bottom: 1rem;
 }
form {
  text-align: left;
  width: 600px;
  max-width: 90%;
  margin: 0 auto;
}
.payment-div {
  width: 300px;
  max-width: 80%;
  margin: 1rem auto;
}

button {
  background-color: #009FF7;
  margin: 1rem auto 3rem auto;
  padding: .8rem;
  color: white;
  text-decoration: none;
  font-weight: bold;
  border-radius: 10px;
  border: none;
  font-size: 1rem;
  font-family: inherit;
  position: center;

  :hover {
    transform: scale(1.1);
    transition: .5s;
  }
  :focus {
    outline: none;
  }
}
.hidden {
  display: none;
}
.centered {
  text-align: center;
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
            placeholder="John Smith"
            required
          /><br />
        </label>
        <label>
          Email address:
          <input type="email" name="email" placeholder="john@smith.com" required /><br />
        </label>
        <label>
          Phone number:
          <input type="tel" name="phone" placeholder="310-867-5309"/><br />
        </label>
        <label>
          Donation amount:
          <input type="number" name="amount" placeholder="50.00" min="1" required/><br />
        </label>
        <div className="centered">
          <button className={checkout ? "checkout-button hidden" : "checkout-button"}>Continue</button>
        </div>
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
      <p>All Donations are 100% tax deductible. The Leadership Hermosa Beach tax ID no. is 06-1721283<br />
      Leadership Hermosa Beach, PO Box 362, Hermosa Beach, CA 90254</p>
    </StyledDonate>
  )
}