import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

import tortuga from '../assets/images/sponsors/tortuga.png';
import levine from '../assets/images/sponsors/levine.png';
import remax from '../assets/images/sponsors/remax.jpg';

const StyledSponsors = styled.div`
  width: 100%;
  background-color: white;
  z-index: 1;
  padding-bottom: 3rem;
  h2 {
    padding: 4rem 0 2rem 0;
    font-size: 2rem;
    text-transform: uppercase;
    max-width: 90%;
    margin: 0 auto;
    line-height: 1;
    color: rgba(46, 129, 0);
    font-weight: 500;
  }
  h3 {
    color: rgba(46, 129, 0);
    font-size: 1.5rem;
    text-transform: uppercase;
    margin: 0 auto;
    padding-top: 1rem;
  }
  .sponsors {
    display: flex;
    justify-content: space-evenly;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  .border {
    height: 1px;
    border-bottom: 1px solid rgba(0,0,0,.37);
    margin: 0 auto;
    width: 800px;
    max-width: 60%;
  }
  .platinum{
    font-size: 3.75rem;
    a {
      width: 500px;
      max-width: 90%;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
  .gold {
    font-size: 2.5rem;
    a {
      width: 250px;
      max-width: 70%;
    }
    img {
      width: 100%;
      height: auto;
    }
  }
  .silver {
    a {
      width: 125px;
      max-width: 40%;
    }
    font-size: 1rem;
    h4 {
      width: 125px;
      padding: 1rem 0;
    }
    img {
      width: 100%;
      height: auto;
    }
  }

  button {
    margin-top: 2rem;
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
`;

export default function Sponsors() {

  const location = window.location.pathname;
  let history = useHistory();

  const handleClick = (e) => {
    e.preventDefault();
    history.push('/sponsorship');
  }

  return (
    <StyledSponsors>
      <h2 className="effect-shine">Thank you to our sponsors!</h2>
      <h3>platinum</h3>
      <div className="platinum sponsors">
        <a href="http://www.levinehomes.com/">
          <img src={levine} alt="Levine Homes"/>
        </a>
      </div>
      <div className="border"></div>
      <h3>gold</h3>
      <div className="gold sponsors">
        <a href="http://www.tortugawealth.com/">
          <img src={tortuga} alt="Tortuga Wealth Management"/>
        </a>
      </div>
      <div className="border"></div>
      <h3>silver</h3>
      <div className="silver sponsors">
        <h4 className="silver">Ryan and Karen Nowicki</h4>
        
        <a href="https://devrazandell.com/">
          <img src={remax} alt="RE/MAX Devra Zandell"/>
        </a>
      </div>
      <button onClick={handleClick} className={location === "/sponsorship" ? "button hidden" : "button"} >Sponsor Us</button>
    </StyledSponsors>
  )
}