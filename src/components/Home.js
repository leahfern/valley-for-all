import React, { useEffect } from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';
import thermometer from '../assets/images/thermometer.png';
import ReactGA from 'react-ga';
import tortuga from '../assets/images/sponsors/tortuga.png';

const StyledHome = styled.div`
  padding-top: 50px;
  padding-bottom: 3rem;
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
  a.link {
    margin: 20rem auto 1rem auto;
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
    width: 400px;
    max-width: 100%;
    padding-bottom: 2rem;
    margin: 2rem auto 3rem auto;
    border-bottom: 5px solid #009FF7; 
    display: block;
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
    a {
      font-size: 1.5rem;
      padding: 1.5rem;
      margin: 2rem auto 0 auto;
    }
    img {
      width: 700px;
    }
  }
`

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
    justify-content: center;
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
  // @media(max-width: 500px) {
  //   .gold {
  //     a {
  //       height: auto;
  //       max-height: 200px;
  //     }
  //   }
  // }
`;

export default function Home() {

  useEffect(() => {
        //report page view
    ReactGA.pageview('/')
  }, [])
  
  return (
    <>
      <StyledHome className="component-container">
        <div className="hero">
          <h1>Valley For All</h1>
          <h3>LEADERSHIP HERMOSA BEACH CLASS OF 2021 PROJECT</h3>
          <img src={thermometer} alt="fundraising status" />
          <Link to="/donate" className="link">Donate today</Link>
        </div>
      </StyledHome>
      <StyledSponsors>
        <h2>Thank you to our sponsors!</h2>
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
        <Link to="/sponsorship" className="button">Sponsor Us</Link>
      </StyledSponsors>
    </>
  )
}
