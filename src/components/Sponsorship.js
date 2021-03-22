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

  #levels {
    padding-top: 2rem;
  }

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

  h4, ul {
    font-weight: 400;
    width: 600px;
    max-width: 100%;
  }

  h4 {
    font-size: 1.8rem;
    color: #36454F;
    width: 500px;
    margin: 0 auto;
    padding: 1rem 0;
    font-weight: 500;
    border-radius: 3px;
  }
  h4.platinum {
    background: 
    linear-gradient(
      -72deg,
      #dedeff,
      #ffffff 16%,
      #dedeff 21%,
      #ffffff 24%,
      #dedeff 27%,
      #dedeff 36%,
      #ffffff 45%,
      #ffffff 60%,
      #dedeff 72%,
      #ffffff 80%,
      #dedeff 84%,
      #555564
    );
  }
  h4.gold {
    margin-top: 5rem;
    background: 
    linear-gradient(
      -72deg,
      #ffde45,
      #ffffff 16%,
      #ffde45 21%,
      #ffffff 24%,
      #ffde45 27%,
      #ffde45 36%,
      #ffffff 45%,
      #ffffff 60%,
      #ffde45 72%,
      #ffffff 80%,
      #ffde45 84%,
      #452100
    );
  }
  h4.silver {
    margin-top: 5rem;
    background: 
    linear-gradient(
      -72deg,
      #dedede,
      #ffffff 16%,
      #dedede 21%,
      #ffffff 24%,
      #999999 27%,
      #dedede 36%,
      #ffffff 45%,
      #ffffff 60%,
      #dedede 72%,
      #ffffff 80%,
      #dedede 84%,
      #a1a1a1
    );
  }
  
  ul {
    text-align: left;
    width: 800px;
    margin: 0 auto;
    padding: 1rem .5rem;
    font-size: 1.2rem;
    list-style-image: url({star})
    margin-left: 0;
    margin-bottom: 1rem;
    padding-left: 1.5rem;
    text-indent: -1.5em;
  }
  li {
    margin: 1rem 0;
    line-height: 1.5;

    :before {
      content: faStar
    }
  }

  a {
    margin: 1rem auto 1rem auto;
    padding: 1rem;
    background-color: #009FF7;
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 10px;
    :hover {
      transform: scale(1.1);
      transition: .5s;
    }
  }
  .hidden {
    display: none;
  }

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
      <section id="levels">
        <div className="level">
          <h4 className="platinum" data-name="platinum" onClick={handleHidden}>PLATINUM - $5,000+</h4>
          <div className={ hidden.platinum ? "hidden" : "default"}>
            <ul>
              <li>{star} Most prominent, permanent dedication within Valley Park as major supporter of the project</li>
              <li>{star} Featured inclusion within Sponsors Page on project website including company logo, overview and link </li>
              <li>{star} Top billing on main event banner to be displayed when final park improvements are unveiled in June</li>
              <li>{star} Social media recognition as a Platinum Sponsor on Leadership Hermosa Beach channels (i.e. Facebook, Instagram)</li>
              <li>{star} Inclusion in Leadership Hermosa Beach email newsletter to current and past members</li>
              <li>{star} Mention of company as Platinum Sponsor in ongoing outreach to local media</li>
            </ul>
            <Link to="/sponsorship/payment">Become a Platinum Sponsor</Link>
          </div>
        </div>
        <div className="level">
          <h4 className="gold" data-name="gold" onClick={handleHidden}>GOLD - $2,500+</h4>
          <div className={ hidden.gold ? "hidden" : "default"}>
            <ul>
              <li>{star} Prominent, permanent recognition within Valley Park as major supporter of this project</li>
              <li>{star} Featured inclusion within Sponsors Page on project website including company logo and link</li>
              <li>{star} Secondary billing on main event banner to be displayed when final park improvements are unveiled in June</li>
              <li>{star} Social media recognition as Gold Sponsor on Leadership Hermosa Beach channels (i.e. Facebook, Instagram)</li>
              <li>{star} Inclusion in Leadership Hermosa Beach email newsletter to current and past members</li>
            </ul>
            <Link to="/sponsorship/payment">Become a Gold Sponsor</Link>
          </div>
        </div>
        <div className="level">
          <h4 className="silver" data-name="silver" onClick={handleHidden}>SILVER - $1,000+</h4>
          <div className={ hidden.silver ? "hidden" : "default"}>
            <ul>
              <li>{star} Permanent recognition within Valley Park as a major supporter of this project</li>
              <li>{star} Featured inclusion within Sponsors Page on project website featuring company logo and link</li>
            </ul>
            <Link to="/sponsorship/payment">Become a Silver Sponsor</Link>
          </div>
        </div>
      </section>
    </StyledSponsorship>
  )
}
