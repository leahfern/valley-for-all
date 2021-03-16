import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-evenly;
  background-color: white;
  z-index: 1;

  a {
    height: 100%;
    color: RGB(34, 93, 28);
    text-transform: uppercase;
    text-decoration: none;
    padding: 0 1rem;

    :hover {
      transition: .5s;
    }
  }
`
export default function Nav() {
  return (
    <StyledNav>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/sponsorship">Sponsor</Link>
      <Link to="/donate">Donate</Link>
    </StyledNav>
  )
}
