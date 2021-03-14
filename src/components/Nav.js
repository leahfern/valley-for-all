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
    color: green;
    text-transform: uppercase;
    text-decoration: none;
    width: 20%;
    
    :last-child {
      color: white;
      background-color: green;
      
      :hover {
        background-color: darkgreen;
      }
    }

    :hover {
      background: darkgreen;
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
