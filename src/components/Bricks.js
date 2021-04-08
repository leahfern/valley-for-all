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
  line-height: 1.5;

  img {
    width: 100%;
    border: 2px solid white;
  }
  .img-container {
    width: 500px;
    max-width: 90%;

    span {
      font-style: italic;
    }
  }
  #top-content {
    width: 800px;
    max-width: 95%;
    margin: 0 auto;
    padding-bottom: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    border-bottom: 5px solid #329CD6;

    p {
      width: 300px;
      max-width: 90%;
      font-size: 1.3rem;
      line-height: 1.5;
      padding: 1rem;
      text-align: left;
    }
  }

  #middle {
    margin: 0 auto;
    width: 800px;
    max-width: 90%;
    border-bottom: 5px solid #329CD6; 

    p {
      text-align: justify;
      margin: 2rem auto;
      width: 700px;
      max-width: 90%;
    }
  }
  label {
    font-weight: bold;

    span {
      margin-top: .5rem;
      margin-bottom: 1rem;
      display: block;
      font-weight: normal;
      font-size: .9rem;
      line-height: 1.5;

      span {
        font-style:italic;
        display: inline;
        margin: 0 auto;
      }
    }

    span#count {
      margin-top: -1.2rem;
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
      border-bottom: 3px solid #329CD6;
    }
  }
  h2 {
    font-weight: 700;
    font-size: 3rem;
    color: white;
    margin: 10rem auto .5rem auto;
    text-transform: uppercase;
    line-height: 1;
  }
  h3 {
    margin-bottom: 3rem;
    font-size: 2rem;
    text-transform: uppercase;
    line-height: 1;
  }
  form {
    text-align: left;
    width: 600px;
    max-width: 90%;
    margin: 4rem auto 0 auto;

    h4 {
      text-align: center;
      text-transform: uppercase;
      font-weight: 700;
      margin-bottom: 1rem;
      font-size: 1.5rem;
    }
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
    max-width: 800px;
    margin: 0 auto;
    line-height: 1.5;
    text-align: center;
  }
  .brick {
    width: 100%;
    text-indent: 1rem;
    padding: .5rem;
    label {
      font-weight: 400;
    }

    :last-child {
      margin-bottom: 1rem;
    }
  }
  .radio {
    height: auto;
    width: auto;
    display: inline-block;
    margin-right: .5rem;
    margin-bottom: 0;
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
  const [formValues, setFormValues] = useState(initialValues);
  const [allowed, setAllowed] = useState(36);
  const [remaining, setRemaining] = useState(36);

  const { name, email, phone, brick, brickName } = formValues;


  useEffect(() => {

    //report page view
    ReactGA.pageview('/bricks')
  }, [])

  const handleChange = e => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value
    if (name === "brick") {
      setAllowed(
        value === "large"
        ? 72
        : 36
      )
    }
    setFormValues({ ...formValues, [name]: newValue });
    if (name === "brickName") {
      const trimmedValue = value.split('/').join('');
      setRemaining(allowed - trimmedValue.length);
    }
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
      <h3>Bricks</h3>
      <section id="top-content">
        <p>
          Purchase an engraved brick and cement your legacy in Valley Park!
        </p>
        <div className="img-container">
          <img src={paver} alt="example paver from previous LHB project" />
          <span>Example from a past LHB project</span>
        </div>
      </section>
      <section id="middle">
        <p>Leadership Hermosa Beach Class of 2021 is giving individuals a chance to personalize a brick that will be a fixture in the lower barbecue area of Valley Park.</p>
        
        <p>Whether you utilize Valley Park's beautiful facilities through local organizations, for special events, or are simply an advocate of green spaces, you now have a limited time to engrave your name into a brick that will become a staple of this park for decades to come. All proceeds support the Valley For All project.</p>
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
              required
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
              required
            />
            <label htmlFor="large">
              8" x 8" - $250
            </label>
          </div>
        </label>
        <label>
          Name(s) to appear on brick:<br />
          <span>Enter the names of individuals or businesses/organizations you would like to appear on the brick. Please note that only names (no other messages) will be accepted. All engravings are subject to approval.<br />
          <br />

          4" x 8" bricks include three lines of 12 characters.<br/>
          8" x 8" bricks include six lines of 12 characters. <br/><br/>

          If you wish to specify line breaks, please use "/".<br />
          <span>ex: "John & Jane/Smith", "Tortuga/Wealth/Management"</span><br /><br />
          Please verify spelling.</span>
          <input
            name="brickName" 
            type="text"
            placeholder="John & Jane Smith"
            value={formValues.brickName}
            onChange={handleChange}
            required
            maxLength={allowed + 6}
          />
          <span id="count">Characters remaining: {remaining}</span>
        </label>
        <div className="centered">
          <button className={checkout ? "checkout-button hidden" : "checkout-button"}>Continue</button>
        </div>
      </form>
      {(checkout === true) 
        ? <div className="payment-div">
          <PayPalTest 
            total={formValues.brick === "large" ? 250.00 : 160.00}
            setFormValues={setFormValues}
            type={`${brick} brick`}
          />
        </div> 

        : ''
      }
      <p className="nonprofit">All Donations are 100% tax deductible. PayPal takes a fee of up to 2.9% + $0.30 from each donation. To avoid fees, please consider sending a check.<br />
      Leadership Hermosa Beach, PO Box 362, Hermosa Beach, CA 90254</p>

    </StyledBricks>
  )
}