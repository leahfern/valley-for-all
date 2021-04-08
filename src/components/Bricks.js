import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PayPalTest from './PayPalTest';
import ReactGA from 'react-ga';
import paver from '../assets/images/paver.png';

const StyledBricks = styled.div`
  max-width: 90%;
  margin: 0 auto;
  color: white;
  padding-top: 30px;

  img {
    width: 100%;
  }
  .img-container {
    width: 500px;
    max-width: 90%;
  }
  #top-content {
    width: 800px;
    max-width: 95%;
    margin: 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;

    p {
      width: 300px;
      max-width: 90%;
      font-size: 1.3rem;
      line-height: 1.5;
      padding: 1rem;
    }
  }
  label {
    font-weight: bold;

    span {
      font-weight: normal;
    }
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
      border-bottom: 3px solid #009FF7;
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
  form {
    text-align: left;
    width: 600px;
    max-width: 90%;
    margin: 3rem auto 0 auto;

    h4 {
      text-align: center;
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom: 1rem;
    }
  }
  .payment-div {
    width: 300px;
    max-width: 80%;
    margin: 1rem auto;
  }
  button {
    background-color: #009FF7;
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
  .brick {
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
`

const initialValues = {
  name: '',
  email: '',
  phone: '',
  brick: '',
  brickName: ''
}

export default function Bricks() {
  const [checkout, setCheckout] = useState(false);
  const [formValues, setFormValues] = useState(initialValues)

  const { name, email, phone, brick, brickName } = formValues;


  useEffect(() => {

    //report page view
    ReactGA.pageview('/bricks')
  }, [])

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value

    setFormValues({ ...formValues, [name]: newValue });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCheckout(true);
    try {
      const response = await fetch('https://v1.nocodeapi.com/leahfern/google_sheets/rkKLSMqOufyVjLPe?tabId=Bricks-NOEDIT', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify([[name, email, phone, brick, brickName, new Date().toLocaleString()]])
      });
      await response.json()
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <StyledBricks>
      <h2>
        Valley For All
      </h2>
      <h3>Buy a brick</h3>
      <section id="top-content">
        <p>
          Purchase one of our engraved bricks and become a permanent part of beautiful Valley Park!
        </p>
        <div className="img-container">
          <img src={paver} alt="example paver from previous LHB project" />
          <span>Example from recent LHB project</span>
        </div>
      </section>
      <form onSubmit={handleSubmit}>
        <h4>Order Form</h4>
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
          Brick Size:
          <div className="brick">
            <input
              className="radio"
              type="radio"
              name="brick"
              value="small"
              id="small"
              checked={formValues.brick === "small"}
              onChange={handleChange}
            />
            <label htmlFor="small">
              4" x 8" - $160
            </label>
          </div>
          <div className="brick">
            <input
              className="radio"
              type="radio"
              name="brick"
              value="large"
              id="large"
              checked={formValues.brick === "large"}
              onChange={handleChange}
            />
            <label htmlFor="large">
              8" x 8" - $250
            </label>
          </div>
        </label>
        <label>
          Name(s) to appear on brick*:
          <input
            name="brickName" 
            type="text"
            placeholder="John & Jane Smith"
            value={formValues.brickName}
            onChange={handleChange}
            required
          />
          <span>Please enter only names of individuals and/or businesses/organizations.</span>
        </label>
        <div className="centered">
          <button className={checkout ? "checkout-button hidden" : "checkout-button"}>Continue</button>
        </div>
      </form>
    </StyledBricks>
  )
}
