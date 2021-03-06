import React, { useState, useEffect } from 'react';

import styled from 'styled-components';
// import PayPalTest from './PayPalTest';
import ReactGA from 'react-ga';

const StyledDonate = styled.div`
  max-width: 90%;
  margin: 0 auto;
  color: white;
  padding-top: 50px;
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
    margin: 9rem auto 1rem auto;
    text-transform: uppercase;
  }
  h3 {
    margin-bottom: 3rem;
    font-size: 2rem;
    text-transform: uppercase;
  }
  p {
    margin: 0 auto;
    width: 800px;
    max-width: 90%;
    padding-bottom: 2rem;
    line-height: 1.5;
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
    margin: 1rem auto;
    padding: 1rem;
    background-color: #329CD6;
    color: white;
    text-decoration: none;
    font-family: inherit;
    font-weight: bold;
    font-size: 1rem;
    border: none;
    border-radius: 10px;
    text-transform: uppercase;
    transition: .5s;
    :hover {
      transform: scale(1.05);
      cursor: pointer;
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
    margin: 2rem auto 0 auto;
    line-height: 1.5;
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

  ReactGA.initialize("UA-193586281-1");
  useEffect(() => {

    //report page view
    ReactGA.pageview('/donate/straight')
  }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCheckout(true);
    try {
      const response = await fetch('https://v1.nocodeapi.com/leahfern/google_sheets/rkKLSMqOufyVjLPe?tabId=Individual-NOEDIT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([[formValues.name, formValues.email, formValues.phone, formValues.amount, new Date().toLocaleString()]])
      });
      await response.json()
    } catch (err) {
      console.log(err)
    }
  }

  const handleChange = e => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  }

  return (
    <StyledDonate className="component-container">
      <h2>
        VALLEY FOR ALL
      </h2>
      <h3>
        DONATE
      </h3>
      <p>
        Leadership Hermosa Beach Class of 2021 greatly appreciates any donation you can make -- your support will go directly to the improvements Valley Park deserves.
      </p>
      <p>
      Donate $50 or more and receive a limited-edition gift while supplies last! Gifts will be distributed to donors during the Valley for All unveiling ceremony at Valley Park in June 2021.
      </p>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            name="name" 
            type="text"
            placeholder="John Smith"
            value={formValues.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Email address:
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
          Phone number:
          <input
            type="tel"
            name="phone"
            placeholder="310-867-5309"
            value={formValues.phone}
            onChange={handleChange}
          />
        </label>
        <label>
          Donation amount:
          <input
            type="number"
            name="amount"
            placeholder="50.00"
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

      {(checkout === true) 
        ? <div className="payment-div">
          {/* <PayPalTest 
            total={formValues.amount}
            setFormValues={setFormValues}
            type="Donation"
            order={formValues}
          /> */}
        </div> 
        : ''
      }
      <p className="nonprofit">All Donations are 100% tax deductible (Tax ID # 06-1721283).  A donation by check can be mailed (and is payable) to Leadership Hermosa Beach, PO Box 362, Hermosa Beach, CA 90254.  Please write ???Valley for All??? in the check memo.  We also offer Venmo as a method of donation.  A confirmation email with your message will be sent 7-10 days after your donation has been received and processed.</p>
    </StyledDonate>
  )
}