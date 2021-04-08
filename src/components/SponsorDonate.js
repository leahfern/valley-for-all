import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import PayPalTest from './PayPalTest';
import ReactGA from 'react-ga';

const StyledDonate = styled.div`
max-width: 90%;
margin: 0 auto;
color: white;
padding-top: 30px;
label {
  font-weight: bold;
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
  margin: 0 auto 2rem;
  border-bottom 3px solid white;
  font-family: inherit;
  :focus {
    border: none;
    outline: none;
    border-bottom: 3px solid #329CD6;
  }
}
h2 {
  font-weight: 700;
  font-size: 3rem;
  color: white;
  margin: 10rem auto 1rem auto;
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
  background-color: #329CD6;
  margin: 1rem auto;
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
.nonprofit {
  padding-bottom: 3rem;
}
.level {
  width: 100%;
  text-indent: 1rem;
  :first-child {
    margin-top: 1rem;
  }
  label {
    font-weight: 400;
  }
}
.radio {
  height: auto;
  width: auto;
  display: inline-block;
  margin-right: .5rem;
}
`;

const initialValues = {
  companyName: '',
  contactName: '',
  contactTitle: '',
  email: '',
  phone: '',
  amount: '',
  level: ''
}

export default function SponsorDonate() {
  const [checkout, setCheckout] = useState(false);
  const [formValues, setFormValues] = useState(initialValues)

  const { companyName, contactName, contactTitle, email, phone, level, amount } = formValues;

  useEffect(() => {
      //report page view
    ReactGA.pageview('/sponsorship/payment')
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCheckout(true);
    try {
      const response = await fetch('https://v1.nocodeapi.com/leahfern/google_sheets/rkKLSMqOufyVjLPe?tabId=Sponsors-NOEDIT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([[companyName, contactName, contactTitle, email, phone, level, amount, new Date().toLocaleString()]])
      });
      await response.json()
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value

    setFormValues({ ...formValues, [name]: newValue });
  }

  return (
    <StyledDonate className="component-container">
      <h2>
        VALLEY FOR ALL
      </h2>
      <h3>
        SPONSOR PAYMENT
      </h3>
      <form onSubmit={handleSubmit}>
      <label>
          Business/Organization Name:
          <input
            name="companyName" 
            type="text"
            placeholder="ABC Corp"
            value={formValues.companyName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contact Name:
          <input
            name="contactName" 
            type="text"
            placeholder="John Smith"
            value={formValues.contactName}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contact Title:
          <input
            name="contactTitle" 
            type="text"
            placeholder="CFO"
            value={formValues.contactTitle}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contact email address:
          <input
            type="email"
            name="email"
            placeholder="john@smith.com"
            value={formValues.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Contact phone number:
          <input
            type="tel"
            name="phone"
            placeholder="310-867-5309"
            value={formValues.phone}
            onChange={handleChange}
          />
        </label>
        <label>
          Sponsorship Level:
          <div className="level">
            <input
              className="radio"
              type="radio"
              name="level"
              value="platinum"
              id="platinum"
              checked={formValues.level === "platinum"}
              onChange={handleChange}
            />
            <label for="platinum">
              Platinum - $5,000 +
            </label>
          </div>
          <div className="level">
            <input
              className="radio"
              type="radio"
              name="level"
              value="gold"
              id="gold"
              checked={formValues.level === "gold"}
              onChange={handleChange}
            />
            <label for="gold">
              Gold - $2,500 +
            </label>
          </div>
          <div className="level">
            <input
              className="radio"
              type="radio"
              name="level"
              value="silver"
              id="silver"
              checked={formValues.level === "silver"}
              onChange={handleChange}
            />
            <label for="silver">
              Silver - $1,000 +
            </label>
          </div>
        </label>
        <label>
          Donation amount:
          <input
            type="number"
            name="amount"
            placeholder="1,000.00"
            min="1"
            value={formValues.amount}
            onChange={handleChange}
            required
          />
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
          <PayPalTest 
            total={formValues.amount}
            setFormValues={setFormValues}
            type={`${formValues.level} Sponsorship`}
          />
        </div> 
        : ''
      }
      <p className="nonprofit">All Donations are 100% tax deductible. The Leadership Hermosa Beach tax ID no. is 06-1721283<br />
      Leadership Hermosa Beach, PO Box 362, Hermosa Beach, CA 90254</p>
    </StyledDonate>
  )
}