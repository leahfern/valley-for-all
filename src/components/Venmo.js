import React, { useEffect } from 'react';
import styled from 'styled-components';
import ReactGA from 'react-ga';
import star from '../assets/images/lhb-star.png';

const StyledVenmo = styled.div`
  color: white;
  width: 800px;
  max-width: 90%;
  margin: 0 auto;
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
  p {
    font-size: 1.2rem;
    margin: 3rem 0;
    line-height: 1.5;
    a.red {
      color: red;
      display: inline;
    }
  }
  p.address {
    font-size: 1.5rem;
  }
  img {
    height: 200px;
    width: 200px;
    border-radius: 50%;
  }
`

export default function Venmo() {

  ReactGA.initialize("UA-193586281-1");

  useEffect(() => {
      //report page view
    ReactGA.pageview('/donate/venmo')
  }, [])
  
  return (
    <StyledVenmo className="component-container">
      <h2>
        VALLEY FOR ALL
      </h2>
      <h3>
        DONATE BY VENMO
      </h3>
      <p>Your donation has been recorded, but please note the order is not complete until payment is received.</p>

      <a href="https://venmo.com/LeadershipHermosaBeach" target="_blank" rel="noreferrer">
        <img src={star} alt="LHB star, same as profile on Venmo" />
      </a>

      <p>
        Please send payments to <a className="red" href="https://venmo.com/LeadershipHermosaBeach" target="_blank" rel="noreferrer">@LeadershipHermosaBeach</a> on Venmo, including your name and Valley For All in the comments. We will email you within 3 business days of receipt to confirm the details of your purchase.
      </p>
      <p>All Donations are 100% tax deductible. The Leadership Hermosa Beach tax ID no. is 06-1721283</p>
    </StyledVenmo>
  )
}
