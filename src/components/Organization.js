import React from 'react';
import lhbLogo from '../assets/images/lhb-logo.png';
import styled from 'styled-components';

const StyledOrg = styled.div`
  
  h2 {
    font-size: 2.5rem;
    padding: 2rem 0;
    color: white;
    width: 600px;
    margin: 0 auto;
    text-transform: uppercase;
  }

  p {
    color: white;
    padding: 1rem 0;
    width: 600px;
    margin: 0 auto 2rem auto;
    line-height: 1.5;
  }

  img {
    width: 300px;
    padding: 1rem 0;
  }

  a {
    background-color: RGB(64, 150, 190);
    margin: 3rem auto 1rem auto;
    padding: .8rem;
    color: white;
    text-decoration: none;
    font-weight: bold;
    border-radius: 10px;

    :hover {
      transform: scale(1.1);
      transition: .5s;
    }
  }

  .space {
    height: 2rem;
  }
`

export default function Organization() {
  return (
    <StyledOrg className="component-container">

      <img src={lhbLogo} alt="leadership hermosa beach logo" />

      <p>
        “Valley for All” marks the latest project for Leadership Hermosa Beach, a community-based organization that fosters a life-long love for the city by educating existing and potential local leaders. 
      </p>

      <a href="http://www.leadershiphermosa.org/">More about LHB</a>
      <div className="space"></div>

    </StyledOrg>
  )
}
