import React, { useEffect } from 'react';
import styled from 'styled-components';
import lhbLogo from '../assets/images/lhb-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import PhotoGallery from './PhotoGallery';
import ReactGA from 'react-ga';

const StyledAbout = styled.div`
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 3rem;
  color: white;
  line-height: 1.5;
  z-index: -1;
  h2 {
    font-weight: 700;
    font-size: 3rem;
    color: white;
    margin: 9rem auto .5rem auto;
    text-transform: uppercase;
    line-height: 1;
  }
  h3 {
    margin: 0 auto;
    margin-bottom: 2rem;
    font-size: 2rem;
    text-transform: uppercase;
    max-width: 90%;
    line-height: 1;
  }
  h2, p, ul {
    width: 800px;
    max-width: 90%;
  }
  p {
    font-weight: 400;
    padding: 1rem 0;
    margin: 0 auto;
  }
  ul {
    text-align: left;
    margin: 0 auto;
    width: 456px;
    max-width: 80%;
    padding-left: 1.4rem;
    text-indent: -1.4em;
  }
  li {
    margin: .5rem 0;
  }
  .gallery-container {
    max-width: 100%;
    width: 900px;
    margin: 2rem auto;
    display: block;
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
    max-width: 100%;
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

  useEffect(() => {
      //report page view
    ReactGA.pageview('/about')
  }, [])

  const star = <FontAwesomeIcon icon={faStar} />

  return (
    <StyledAbout className="component-container">
      <h2>
        Valley For All
      </h2>
      <h3>About our project</h3>
      <p>
        “Valley for All” is a local community project committed to beautifying and restoring the popular, high-traffic lower BBQ area of Valley Park in Hermosa Beach. As the space is in dire need of attention, this project will perform key improvements, including:
      </p>
      <ul>
        <li>{star} The installation of a new entrance ramp</li>
        <li>{star} Ground leveling throughout the perimeter</li>
        <li>{star} Replacement of key amenities, such as the BBQs and sink</li>
        <li>{star} General power washing and cleanup </li>
        <li>{star} Other necessary maintenance upgrades </li>
      </ul>

      <p className="lastp">
        Encouraging outdoor engagement when needed the most, "Valley for All" will feature restored area conditions that offer a more functional, inclusive and accessible space for our entire community.  
      </p>
      <div className="gallery-container">
        <PhotoGallery />
      </div>
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
