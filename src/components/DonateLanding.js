import React, { useEffect } from 'react';
// import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { useHistory } from 'react-router';
import ReactGA from 'react-ga';
import thermometer from '../assets/images/thermometer.png';


const StyledLanding = styled.div`
  padding-top: 50px;
  padding-bottom: 3rem;
  color: white;
  z-index: -1;

  h2 {
    font-weight: 700;
    font-size: 3rem;
    color: white;
    margin: 9rem auto .5rem auto;
    text-transform: uppercase;
  }
  h3 {
    margin-bottom: 2rem;
    font-size: 2rem;
    text-transform: uppercase;
  }
  .main-content {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-wrap: wrap;
    width: 1400px;
    max-width: 100%;
    margin: 0 auto;
  }
  .image-container {
    width: 700px;
    max-width: 90%;
  }
  img {
    width: 90%;
    height: auto;
    padding-bottom: 2rem;
  }
  .buttons {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    width: 25%;
    // max-width: 100%;
    // margin: 0 auto;
    align-items: center;
  }
  button {
    font-family: inherit;
    background: rgba(50,156,214);
    // height: 250px;
    width: 220px;
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


  @media(max-width: 935px) {
    .buttons {
      width: 100%;
      button {
        width: 65%;
        margin: .5rem;
        min-width: 200px;
      }
    }
    .image-container {
      margin-bottom: 2rem;
      img {
        border-bottom: 5px solid rgba(50,156,214);
      }
    }
  }
  @media(max-width: 500px) {
    h2 {
      font-size: 2.5rem;
    }
    h3 {
      font-size: 1.5rem;
    }
    .buttons {
      button {
        font-size: 1rem;
        span {
          font-size: 1rem;
        }
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
      <section className="main-content">
        <div className="image-container">
          <img src={thermometer} alt="Raised $24,959 of $36,000 goal. 69% achieved" />
        </div>
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
      </section>
    </StyledLanding>
  )
}
