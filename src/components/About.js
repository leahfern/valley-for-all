import React from 'react';
import styled from 'styled-components';
import lhbLogo from '../assets/images/lhb-logo.png';


const StyledAbout = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 3rem;
  h2 {
    font-size: 3rem;
    color: white;
    margin: 9rem auto 3rem auto;
    text-transform: uppercase;
    font-weight: 700;
  }
  h2, p {
    color: white;
    width: 800px;
    max-width: 100%;
  }
  p {
    font-weight: 400;
    font-size: 1.2rem;
    padding: 1rem 0;
    margin: 0 auto;
    line-height: 1.5;
  }
  iframe {
    margin: 3rem 0;
    height: 50vw;
    max-height: 580px;
    max-width: 90%;
  }
`

const StyledOrg = styled.div`
  max-width: 90%;
  margin: 0 auto;
  h2 {
    font-size: 2.5rem;
    padding: 2rem 0;
    color: white;
    margin: 0 auto;
    text-transform: uppercase;
  }

  p {
    color: white;
    padding: 1rem 0;
    margin: 0 auto 2rem auto;
    line-height: 1.5;
  }

  img {
    width: 300px;
    padding: 1rem 0;
  }

  a {
    background-color: RGB(64, 150, 190);
    margin: 3rem auto;
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

export default function About() {
  return (
    <StyledAbout className="component-container">
      <h2>
        Valley For All
      </h2>
      <p>
        “Valley for All” is a local community project committed to improving and restoring the popular, high-traffic lower BBQ area of Valley Park in Hermosa Beach -- a space in dire need of attention.
      </p>

      <p className="lastp">
        Encouraging community engagement, “Valley for All” will feature upgraded amenities, improved area conditions and a more functional space for all park-goers in Valley Park.
      </p>
      <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQeIIT9XxrwtVq5dtXu0flVXcKGLS88PLmdXSVXrQ8cBLKflxsu4ESnJUrQ5mroA0b5Fcqh_jki35y2/embed?start=false&loop=false&delayms=10000" frameborder="0" width="960" height="569" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" title="Valley For All slideshow"></iframe>

      <StyledOrg className="component-container">

        <img src={lhbLogo} alt="leadership hermosa beach logo" />

        <p>
          “Valley for All” marks the latest project for Leadership Hermosa Beach, a community-based organization that fosters a life-long love for the city by educating existing and potential local leaders. 
        </p>

        <a href="http://www.leadershiphermosa.org/">More about LHB</a>
        <div className="space"></div>

        </StyledOrg>
    </StyledAbout>

    
  )
}
