import React from 'react';
import { useHistory } from 'react-router';
import styled from 'styled-components';

import tortuga from '../assets/images/sponsors/tortuga.png';
import levine from '../assets/images/sponsors/levine.png';
import remax from '../assets/images/sponsors/remax.jpg';
import culturedslice from '../assets/images/sponsors/culturedslice.jpg';
import hermosacyclery from '../assets/images/sponsors/hermosacyclery.png';
import bchd from '../assets/images/sponsors/bchd.jpeg';
import kiwanis from '../assets/images/sponsors/kiwanis.png';
import socalgas from '../assets/images/sponsors/socalgas.jpg';
import chevron from '../assets/images/sponsors/chevron.jpg';
import athens from '../assets/images/sponsors/athens.jpg';


const StyledSponsors = styled.div`
  width: 100%;
  background-color: white;
  z-index: 1;
  padding-bottom: 3rem;
  .sponsorship-page {
    padding-top: 12rem;
  }
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
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 1rem .5rem;
    align-items: center;

    a {
      padding: 10px;
    }
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
      text-decoration: none;
      p {
        font-size: .9rem;
        color: rgba(0,0,0,.87);
        line-height: 1.2;
        width: 90%;
        margin: 0 auto;
      }
    }
    img {
      width: 100%;
      height: auto;
    }

  }
  .gold, .supporter {
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
      color: black;
      text-decoration: none;
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
  .supporter {
    padding: 2rem 0;
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
      <h2 className={location === '/sponsorship' ? 'sponsorship-page' : ''}>
        {location === '/sponsorship'
          ? 'thank you to valley for all sponsors'
          : 'Thank you to our sponsors!'
        }
        
      </h2>
      <h3>platinum</h3>
      <div className="platinum sponsors">
        <a href="http://www.levinehomes.com/" target="_blank" rel="noreferrer">
          <img src={levine} alt="Levine Homes"/>
          <p>Levine Homes is a full-service Real Estate Broker and General Contractor.  We will help you prepare and sell your home or help you find a new home and make it your dream home.  Levine Homes is The South Bay's best choice for Real Estate & Construction.</p>
        </a>
      </div>                          
      <div className="border"></div>
      <h3>gold</h3>
      <div className="gold sponsors">
        <a href="http://www.tortugawealth.com/" target="_blank" rel="noreferrer">
          <img src={tortuga} alt="Tortuga Wealth Management"/>
        </a>
        <a href="http://hermosakiwanis.org/" target="_blank" rel="noreferrer">
          <img src={kiwanis} alt="Kiwanis Hermosa Beach"/>
        </a>
      </div>
      <div className="border"></div>
      <h3>silver</h3>
      <div className="silver sponsors">
        <h4 className="silver">Ryan and Karen Nowicki</h4>
        
        <a href="https://devrazandell.com/" target="_blank" rel="noreferrer">
          <img src={remax} alt="RE/MAX Devra Zandell"/>
          <br />
          Devra Zandell
        </a>
        <a href="https://www.culturedslice.com/" target="_blank" rel="noreferrer">
          <img src={culturedslice} alt="Cultured Slice"/>
        </a>
        <a href="https://www.hermosacyclery.com/" target="_blank" rel="noreferrer">
          <img src={hermosacyclery} alt="Hermosa Cyclery"/>
        </a>
        <a href="https://www.socalgas.com/" target="_blank" rel="noreferrer">
          <img src={socalgas} alt="So Cal Gas"/>
        </a>
        <a href="http://www.chevronelsegundo.com/" target="_blank" rel="noreferrer">
          <img src={chevron} alt="Chevron El Segundo"/>
        </a>
        <a href="https://athensservices.com/" target="_blank" rel="noreferrer">
          <img src={athens} alt="Athens Services"/>
        </a>
      </div>
      <div className="border"></div>
      <h3>financial supporter</h3>
      <div className = "supporter sponsors">
        <a href="https://bchd.org/" target="_blank" rel="noreferrer">
          <img src={bchd} alt="Beach Cities Health District"/>
        </a>
      </div>
      {/* <button onClick={handleClick} className={location === "/sponsorship" ? "button hidden" : "button"} >Sponsor Us</button> */}
    </StyledSponsors>
  )
}