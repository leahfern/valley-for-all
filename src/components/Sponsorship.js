import React, {useState} from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';

const StyledSponsorship = styled.div`
  max-width: 90%;
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 3rem;
  color: white;

  h2 {
    font-weight: 700;
    font-size: 3rem;
    color: white;
    margin: 9rem auto 1rem auto;
    text-transform: uppercase;
  }
  h3 {
    margin-bottom: 2rem;
    font-size: 2rem;
    text-transform: uppercase;
  }

  // h4.platinum {
  //   background: 
  //   linear-gradient(
  //     -72deg,
  //     #dedeff,
  //     #ffffff 16%,
  //     #dedeff 21%,
  //     #ffffff 24%,
  //     #dedeff 27%,
  //     #dedeff 36%,
  //     #ffffff 45%,
  //     #ffffff 60%,
  //     #dedeff 72%,
  //     #ffffff 80%,
  //     #dedeff 84%,
  //     #555564
  //   );
  // }
  // h4.gold {
  //   margin-top: 5rem;
  //   background: 
  //   linear-gradient(
  //     -72deg,
  //     #ffde45,
  //     #ffffff 16%,
  //     #ffde45 21%,
  //     #ffffff 24%,
  //     #ffde45 27%,
  //     #ffde45 36%,
  //     #ffffff 45%,
  //     #ffffff 60%,
  //     #ffde45 72%,
  //     #ffffff 80%,
  //     #ffde45 84%,
  //     #452100
  //   );
  // }
  // h4.silver {
  //   margin-top: 5rem;
  //   background: 
  //   linear-gradient(
  //     -72deg,
  //     #dedede,
  //     #ffffff 16%,
  //     #dedede 21%,
  //     #ffffff 24%,
  //     #999999 27%,
  //     #dedede 36%,
  //     #ffffff 45%,
  //     #ffffff 60%,
  //     #dedede 72%,
  //     #ffffff 80%,
  //     #dedede 84%,
  //     #a1a1a1
  //   );
  // }
  

`;
const star = <FontAwesomeIcon icon={faStar} />


export default function Sponsorship() {
  const [hidden, setHidden] = useState({
    platinum: false,
    gold: false,
    silver: false
  })

  const handleHidden = (e) => {
    const name = e.target.dataset.name
    hidden[name] === true
    ? setHidden({
      ...hidden,
      [name]: false
    })
    : setHidden({
      ...hidden,
      [name]: true
    })
  }

  return (
    <StyledSponsorship className="component-container">
      <h2>Valley For All</h2>
      <h3>Sponsorship Opportunities</h3>

    </StyledSponsorship>
  )
}
