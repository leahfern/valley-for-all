import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";

const StyledBottomNav = styled.div`
  width: 100%;
  height: 40px;
  background: #009FF7;
  font-size: 1rem;
  font-weight: 500;
  display: flex;
  justify-content: space-between;
  line-height: 2.5;
  color: white;
  a {
    color: white;
    font-size: 1.2rem;
    padding: 0;
    margin: 0 .5rem;
    border: none;
    text-decoration: none;
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

    li {
      padding: 0;
      margin: 0;
      height: 40px;

      a {
        line-height: 1;
      }
    }
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
  @media(max-width: 780px) {
    font-size: .9rem;
    a {
      font-size: 1.2rem;
    }
    ul {
      display: none;
    }
    .email {
      margin: 0 auto;
    }
  }
`;


export default function BottomNav() {

  const facebook = <FontAwesomeIcon icon={faFacebook} />
  const insta = <FontAwesomeIcon icon={faInstagram} />

  return (
    <StyledBottomNav>
      <ul>
        <li>Follow Us On: </li>
        <li><a href="https://www.facebook.com/ValleyForAll">{facebook}</a></li>
        <li><a href="https://www.instagram.com/ValleyForAll">{insta}</a></li>
      </ul>
      <div className="email">
        <a href="mailto:valleyforall@gmail.com">ValleyForAll@gmail.com</a>
      </div>
    </StyledBottomNav>
  )
}
