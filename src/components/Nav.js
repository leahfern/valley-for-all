import React from 'react';
import {Link} from 'react-router-dom';
import styled from 'styled-components';
import lhbLogo from '../assets/images/lhb-logo.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const StyledNav = styled.nav`
position: fixed;
color: white;
width: 100%;
z-index: 1;
  #top-nav {
    width: 100%;
    height: 40px;
    background: #009FF7;
    font-size: 1rem;
    font-weight: 500;
    display: flex;
    justify-content: space-between;
    line-height: 2.5;
    a {
      color: white;
      font-size: 1.2rem;
      padding: 0;
      margin: .5rem;
      border: none;
      :hover {
        border: none;
        color: #36454F;
        transition: .1s;
      }
    }
    ul {
      display: flex;
      margin: 0 2rem;
      align-items: center;
    }
    .email {
      margin: 0 2rem;

      a {
        text-transform: none;
        font-size: 1rem;
        margin: 0;
        padding: 0;
      }
    }
  }
  .bottom-nav {
    width: 100%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    background-color: white;
    padding: 1rem 0;
  }
  .links {
    display: flex;
    justify-content: space-evenly;
  }
  a {
    color: green;
    font-weight: 500;
    text-transform: uppercase;
    text-decoration: none;
    padding: .5rem;
    border-bottom: 3px solid transparent;
    z-index: 3;
    font-size: 1rem;
    margin: 0 1rem;

    :hover {
      color: darkgreen;
      transition: .5s;
      border-bottom: 3px solid #009FF7;
    }
  }
  .logo-container {
    padding-left: 3rem;
  }
  .donate {
    width: 200px;
    padding-right: 3rem;
    a {
      border: none;
      background: green;
      color: white;
      
      :hover {
        background: darkgreen;
      }
    }
  }
  img {
    height: 50px;
    z-index: 0;
  }

  @media(max-width: 787px) {
    justify-content: space-between;
    a {
      font-size: .8rem;
      margin: 0 1.5rem;
    }
    .logo-container {
      width: 100%;
      margin-bottom: .5rem;
    }
    img {
      height: 40px;
    }
    .links {
      padding: 0;
      margin: 0;

      a {
        margin: 0 1.5rem;
      }
    }
    .donate {
      width: 100px;
      padding: 0;
      margin: 0;
    }
    #top-nav {
      font-size: .9rem;
      a {
        font-size: 1.2rem;
      }
      .email {
        display: none;
      }
    }
    .bottom-nav {
      justify-content: center;

      .logo-container {
        padding: 0;
      }
    }
  }
  @media(max-width: 500px ) {
    .bottom-nav {
      justify-content: space-evenly;
    }
    .logo-container {
      margin-bottom: 1rem;
    }
    .donate {
      width: 25%;
      margin: 0;
      margin-left: 0;
      text-align: left;
      a {
        margin: 0;
        line-height: 1.5;
        padding: .25rem;
      }
    }
    .links {
      width: 75%;
      padding: 0;
      margin: 0;
      justify-content: space-evenly;
      a {
        margin: 0;
        padding: .25rem 0;
      }
    }
    
  }
  @media(min-width: 1600px) {
    a {
      margin: 0
    }
    .links {
      width: 50%;
      margin: 0 auto;
    }
  }
`
export default function Nav() {

  const facebook = <FontAwesomeIcon icon={faFacebook} />
  const insta = <FontAwesomeIcon icon={faInstagram} />

  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("top-nav").style.display = "none";
    } else {
      document.getElementById("top-nav").style.display = "flex";
    }
  }

  return (
    <StyledNav>
      <div id="top-nav">
        <ul>
          <li>Follow Us On: </li>
          <li><a href="https://www.facebook.com/ValleyForAll">{facebook}</a></li>
          <li><a href="https://www.instagram.com/ValleyForAll">{insta}</a></li>
        </ul>
        <div className="email">
          <a href="mailto:valleyforall@gmail.com">ValleyForAll@gmail.com</a>
        </div>
      </div>
      <div className="bottom-nav">
        <div className="logo-container">
          <img src={lhbLogo} alt="LHB logo"/>
        </div>
        <div className = "links">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/sponsorship">Sponsor Us</Link>
        </div>
        <div className="donate">
          <Link to="/donate">Donate</Link>
        </div>
      </div>
    </StyledNav>
  )
}
