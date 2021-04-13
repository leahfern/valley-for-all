import React, { useEffect } from 'react';
import styled from 'styled-components';
import {useHistory} from 'react-router';
import thermometer from '../assets/images/thermometer.png';
import bricks from '../assets/images/social-bricks.png';
import ReactGA from 'react-ga';
import Sponsors from './Sponsors';
// import Ticker from './Ticker';

const StyledHome = styled.div`
  padding-top: 50px;
  color: white;
  max-width: 90%;
  margin: 0 auto;
  h1 {
    font-size: 4.5rem;
    text-transform: uppercase;
    color: white;
    letter-spacing: 5px;
    margin: 7rem auto 0 auto;
    font-weight: 900;
  }
  h3 {
    font-weight: 700;
    font-size: 1.4rem;
    text-transform: uppercase;
    color: white;
    margin: 0 auto 1rem auto;
    padding: .5rem 0;

  }
  button.link {
    margin: 2rem auto 4rem auto;
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
  img {
    width: 400px;
    max-width: 100%;
    padding: 2rem 0;
    margin: 0 auto;
    border-bottom: 5px solid #329CD6; 
    display: block;

    :hover {
      cursor: pointer;
    }
  }
  @media(max-width: 787px) {
    h1 {
      margin-top: 9rem;
      font-size: 4rem;
    }
  }
  @media(max-width: 500px ) {
    h1 {
      margin-top: 8rem;
      font-size: 3rem;
      letter-spacing: 1px;
    }
    h3 {
      font-size: 1rem;
    }
  }
  @media(min-width: 1600px) {
    h1 {
      font-size: 6rem;
      margin-bottom: .5rem;
      margin-top: 8rem;
    }
    h3 {
      font-size: 1.8rem;
      padding: 0;
      padding-bottom: .5rem;
    }
    button {
      font-size: 1.5rem;
      padding: 1.5rem;
      margin: 2rem auto 0 auto;
    }
    img {
      width: 500px;
    }
  }
`


export default function Home() {

  const history = useHistory();

  useEffect(() => {
        //report page view
    ReactGA.pageview('/')
  }, [])
  
  const handleClick = e => {
    e.preventDefault();
    history.push('/donate');
  }

  const handleBricksClick = e => {
    e.preventDefault();
    history.push('/bricks');
  }

  return (
    <>
      <StyledHome className="component-container">
        <div className="hero">
          <h1>Valley For All</h1>
          <h3>LEADERSHIP HERMOSA BEACH CLASS OF 2021 PROJECT</h3>
          <img onClick={handleBricksClick} src={bricks} alt="fundraising status" />
          <button onClick={handleClick} className="link">Donate today</button>
        </div>
      </StyledHome>
      {/* <Ticker /> */}
      <Sponsors />
    </>
  )
}
