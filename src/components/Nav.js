import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import lhbLogo from '../assets/images/lhb-logo.png';

const StyledNav = styled.nav`
  width: 95%;
  margin: 0 auto;
  height: 60px;
  line-height: 50px;
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  flex-wrap: wrap;
  z-index: 1;

  .links {
    display: flex;
    justify-content: space-evenly;
  }
  a {
    color: white;
    font-weight: 700;
    text-transform: uppercase;
    text-decoration: none;
    padding: 0 1rem;
    border-bottom: 3px solid transparent;
    z-index: 3;

    :hover {
      color: lightgrey;
      transition: .5s;
      border-bottom: 3px solid #009FF7;
    }
  }
  img {
    height: 50px;
    z-index: 0;
  }
  @media(max-width: 615px) {
    justify-content: center;
    a {
      font-size: .8rem;
    }
    .links {
      width: 100%;
    }
  }
`
export default function Nav() {
  return (
    <StyledNav>
      <img src={lhbLogo} alt="LHB logo"/>
      <div className = "links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/sponsorship">Sponsor</Link>
        <Link to="/donate">Donate</Link>
      </div>
    </StyledNav>
  )
}
