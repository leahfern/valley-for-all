import React from 'react';
import tortuga from '../assets/images/sponsors/tortuga.png';
import styled from 'styled-components';
import {Link, useParams} from 'react-router-dom';

const StyledSponsors = styled.div`
  width: 100%;
  background-color: white;
  z-index: 1;
  padding-bottom: 5rem;
  h2 {
    padding: 4rem 0 2rem 0;
    font-size: 2rem;
    text-transform: uppercase;
    max-width: 90%;
    margin: 0 auto;
    line-height: 1;
    color: green;
  }
  .sponsors {
    display: flex;
    justify-content: space-evenly;
  }
  .platinum{
    font-size: 3.75rem;
    a {
      width: 500px;
      max-width: 100%;
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
    margin-bottom: 2rem;
    a {
      width: 125px;
      max-width: 40%;
    }
    font-size: 1rem;
    h4 {
      width: 125px;
      padding: 1rem 0;
    }
  }

  a.button {
    margin: 20rem auto 1rem auto;
    padding: 1rem;
    background-color: #329CD6;
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 10px;
    text-transform: uppercase;
    :hover {
      transform: scale(1.1);
      transition: .5s;
    }
  }
`;

export default function Sponsors() {

  const { route } = useParams();
  console.log(route);

  return (
    <StyledSponsors>
      <h2 className="effect-shine">Thank you to our sponsors!</h2>
      <div className="platinum sponsors">
          
      </div>
      <div className="gold sponsors">
        <a href="http://www.tortugawealth.com/">
          <img src={tortuga} alt="Tortuga Wealth Management"/>
        </a>
      </div>
      <div className="silver sponsors">
        <h4 className="silver">Ryan and Karen Nowicki</h4>
      </div>
      <Link to="/sponsorship" className={"button"} >Sponsor Us</Link>
    </StyledSponsors>
  )
}
{/* <button className={checkout ? "checkout-button hidden" : "checkout-button"}>Continue</button> */}