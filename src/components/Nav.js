import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';

const StyledNav = styled.nav`
  position: fixed;
  width: 100%;
  height: 50px;
  line-height: 50px;
  display: flex;
  justify-content: space-evenly;
  margin: auto;
  color: red;
  background-color: white;
  z-index: 1;

  a {
    height: 100%;
    width: 200px;
    color: green;
    text-transform: uppercase;
    text-decoration: none;
    
    :last-child {
      color: white;
      background-color: green;
    }

    :hover {
      background: green;
      color: white;
      transition: .5s;
    }
  }
`
export default function Nav() {
  return (
    <StyledNav>
      <Link to="/">Home</Link>
      <Link to="/project">Project</Link>
      <Link to="/organization">Organization</Link>
      <Link to="/sponsorship">Become a Sponsor</Link>
      <Link to="/donate">Donate</Link>
    </StyledNav>
  )
}
