import React from 'react';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const StyledHome = styled.div`
  h1 {
    padding-top: 1rem;
    font-size: 5rem;
    text-transform: uppercase;
    color: white;
    letter-spacing: 5px;
    max-width: 90%;
    margin: 0 auto;
  }
  h3 {
    font-size: 1.4rem;
    text-transform: uppercase;
    color: white;
    margin: 0 auto;
    padding: 1rem 0;
    max-width: 90%;

  }
  a {
    margin: 3rem auto 1rem auto;
    padding: 1rem;
    background-color: RGB(196, 35, 42);
    width: 150px;
    color: white;
    text-decoration: none;
    font-weight: bold;
    border-radius: 10px;

    :hover {
      transform: scale(1.1);
      transition: .5s;
    }
  }
`

export default function Home() {
  return (
    <StyledHome className="component-container">
      <div className="hero">
        <div className="blur">
          <h1>Valley For All</h1>
          <h3>A project by Leadership Hermosa Beach Class of 2021</h3>
          <Link to="/project">Learn more</Link>
        </div>
      </div>
    </StyledHome>
  )
}
