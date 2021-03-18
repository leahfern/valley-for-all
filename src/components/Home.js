import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import thermometer from '../assets/images/thermometer.png';

const StyledHome = styled.div`
  h1 {
    font-size: 5rem;
    text-transform: uppercase;
    color: white;
    letter-spacing: 5px;
    max-width: 90%;
    // margin: 50px auto 0 auto;
    margin: 2rem auto 0 auto;
    font-weight: 900;
  }
  h3 {
    font-weight: 700;
    font-size: 1.4rem;
    text-transform: uppercase;
    color: white;
    margin: 0 auto;
    padding: 1rem 0;
    max-width: 90%;

  }
  a {
    margin: 1rem auto 1rem auto;
    padding: 1rem;
    background-color: #009FF7;
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
  img {
    width: 600px;
    max-width: 90%;
    padding-bottom: 2rem;
    margin: 2rem auto;
    border-bottom: 5px solid #009FF7; 
  }
  @media(max-width: 615px) {
    h1 {
      margin-top: 2rem;
      font-size: 4rem;
    }
  }
  @media(min-width: 1600px) {
    h1 {
      font-size: 7rem;
      margin: 2rem auto;
    }
    h3 {
      font-size: 2rem;
    }
    a {
      font-size: 1.5rem;
      padding: 1.5rem;
      margin: 2rem auto;
    }
    img {
      width: 700px;
    }
  }
`

export default function Home() {
  return (
    <StyledHome className="component-container">
      <div className="hero">
        <div className="blur">
          <h1>Valley For All</h1>
          <h3>LEADERSHIP HERMOSA BEACH CLASS OF 2021 PROJECT</h3>
          <img src={thermometer} alt="fundraising status" />
          <Link to="/donate">Donate today</Link>
        </div>
      </div>
    </StyledHome>
  )
}
