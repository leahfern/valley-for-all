import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import ReactGA from 'react-ga';


const StyledLanding = styled.div`
  padding-top: 50px;
  padding-bottom: 200px;
  color: white;
  z-index: -1;

  h2 {
    font-weight: 700;
    font-size: 3rem;
    color: white;
    margin: 9rem auto 1rem auto;
    text-transform: uppercase;
  }
  h3 {
    margin-bottom: 4rem;
    font-size: 2rem;
    text-transform: uppercase;
  }
  .buttons {
    display: flex;
    justify-content: space-evenly;
    width: 1200px;
    max-width: 100%;
    margin: 0 auto;
    align-items: center;
  }
  button {
    font-family: inherit;
    background: rgba(50,156,214,.37);
    height: 250px;
    width: 250px;
    border: 3px solid #329CD6;
    border-radius: 5px;
    margin: 1rem;
    text-decoration: none;
    color: white;
    font-size: 1.5rem;
    transition: 1s;

    div {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      height: 100%;
      text-transform: uppercase;
      padding: .5rem;

      span {
        font-size: 1.3rem;
        text-transform: none;
      }
    }

    :hover {
      cursor: pointer;
      transform: scale(1.05);
      background: rgba(50,156,214);
      color: ;
    }
  }


  @media(max-width: 787px) {
    .buttons {
      flex-direction: column;
      button {
        height: 150px;
      }
    }
  }
`


export default function DonateLanding() {

  let history = useHistory();

  useEffect(() => {

    //report page view
    ReactGA.pageview('/donate')
  }, [])

  return (
    <StyledLanding>
      <h2>
        VALLEY FOR ALL
      </h2>
      <h3>
        Ways to support us
      </h3>
      <div className="buttons">
        <button onClick = {(e)=> {
          e.preventDefault();
          history.push('/bricks');
        }}>
          <div>
            Purchase an engraved brick<br />
            <span>(starting at $160)</span>
          </div>
        </button>
        <button onClick = {(e)=> {
          e.preventDefault();
          history.push('/donate/straight');
        }}>
          <div>
            Make a donation
          </div>
        </button>
        <button onClick = {(e)=> {
          e.preventDefault();
          history.push('/sponsorship');
        }}>
          <div>
            Become a Sponsor<br />
            <span>(starting at $1,000)</span>
          </div>
        </button>
      </div>
    </StyledLanding>
  )
}
