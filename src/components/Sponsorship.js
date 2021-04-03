import React, { useEffect } from 'react'
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom';
import ReactGA from 'react-ga';
import Sponsors from './Sponsors';

const star = <FontAwesomeIcon icon={faStar} />
  
const StyledSponsorship = styled.div`
  margin: 0 auto;
  padding-top: 50px;
  padding-bottom: 3rem;
  color: white;

  h2 {
    font-weight: 700;
    font-size: 3rem;
    color: white;
    margin: 9rem auto .5rem auto;
    text-transform: uppercase;
    width: 1000px;
    max-width: 90%;
  }
  h3 {
    margin: 0 auto;
    margin-bottom: 2rem;
    font-size: 2rem;
    text-transform: uppercase;
    max-width: 90%;
    line-height: 1;
  }
  p {
    width: 900px;
    max-width: 90%;
    margin: 1rem auto;
    padding-top: 2rem;
    font-size: 1.2rem;
    line-height: 1.2;
  }
  a {
    padding: 1rem;
    background-color: #009FF7;
    color: white;
    text-decoration: none;
    font-weight: bold;
    font-size: 1rem;
    border-radius: 10px;
    text-transform: uppercase;
  }
  a.contact {
    font-size: inherit;
    color: inherit;
    padding: 0;
    margin: 0;
    height: auto;
    width: auto;
    background: transparent;
    text-transform: none;
    font-weight: 400;
    text-decoration: underline;
  }
  span {
    font-size: .7rem;
    position: relative;
    bottom: 1px;
  }
  .tableContainer {
    overflow-x: auto;
    width: 90%;
    margin: 1rem auto 3rem auto;
  }
  table {
    color: #36454F;
    width: 100%;
    max-width: 1000px;
    min-width: 750px;
    text-align: left;
    margin: 0 auto;
    font-size: .9rem;
    th {
      font-weight: 600;
      text-align: center;
      padding: .5rem;
    }
    td {
      padding: .5rem 1rem;
    }
    tr.levels th {
      padding: 1rem 0;
      font-size: 1rem;
      width: 200px;
      line-height: 1.2;
    }
    th.category {
      background: #36454F;
      color: white;
      vertical-align: middle;
      border-bottom: 1px solid grey;
      line-height: 1.2;
    }
    ul {
      padding-top: .25rem;
      padding-left: 1.4rem;
      text-indent: -1.4em;
    }
    li {
      padding: .25rem 0;

      :before {
        content: ${star};
      }
    }
  }

  .platinum {
    border-bottom: 1px solid grey;
    background: #E5E4E2;
  }
  .gold {
    border-bottom: 1px solid grey;
    margin-top: 5rem;
    background: #FFD700;
  }
  .silver {
    border-bottom: 1px solid grey;
    margin-top: 5rem;
    background: #C0C0C0;
  }
  @media(max-width: 835px) {
    .tableContainer {
      width: 100%;
    }
  }
`;


export default function Sponsorship() {

  useEffect(() => {
    //report page view
  ReactGA.pageview('/sponsorship')
}, [])

  return (
    <>
      <StyledSponsorship className="component-container">
        <h2>Valley For All</h2>
        <h3>Sponsorship Opportunities</h3>
        <div className="tableContainer">
          <table>
            <col style={{width:" 16%"}} />
            <col style={{width:" 28%"}}  />
            <col style={{width:" 28%"}}  />
            <col style={{width:" 28%"}}  />
            <tr className="levels">
              <th></th>
              <th className="platinum">Platinum Sponsor<br />$5,000 +</th>
              <th className="gold">Gold Sponsor<br />$2,500 +</th>
              <th className="silver">Silver Sponsor<br />$1,000 +</th>
            </tr>
            <tr>
              <th className="category">Permanent Dedication In Valley Park</th>
              <td className="platinum">Most Prominent Positioning</td>
              <td className="gold">Prominent Positioning</td>
              <td className="silver">Included</td>
            </tr>
            <tr>
              <th className="category">Website Inclusion</th>
              <td className="platinum">
                <ul>
                  <li><span>{star}</span> Logo</li>
                  <li><span>{star}</span> Link</li>
                  <li><span>{star}</span> Overview</li>
                </ul>
              </td>
              <td className="gold">
                <ul>
                  <li><span>{star}</span> Logo</li>
                  <li><span>{star}</span> Link</li>
                </ul>
              </td>
              <td className="silver">
                <ul>
                  <li><span>{star}</span> Logo</li>
                  <li><span>{star}</span> Link</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th className="category">Social Media Recognition</th>
              <td className="platinum">
                Recognized as Platinum Sponsor
                <ul>
                  <li><span>{star}</span> 3x FB Posts</li>
                  <li><span>{star}</span> 2x IG Posts</li>
                  <li><span>{star}</span> 1x Dedicated FB Post</li>
                  <li><span>{star}</span> 1x Dedicated IG Post</li>
                </ul>
              </td>
              <td className="gold">
                Recognized as Gold Sponsor
                <ul>
                  <li><span>{star}</span> 3x FB Posts</li>
                  <li><span>{star}</span> 2x IG Posts</li>
                </ul>
              </td>
              <td className="silver">
                Recognized as Silver Sponsor
                <ul>
                  <li><span>{star}</span> 2x FB Posts</li>
                  <li><span>{star}</span> 1x IG Post</li>
                </ul>
              </td>
            </tr>
            <tr>
              <th className="category">Event Banner at Unveiling Event</th>
              <td className="platinum">Recognized as Platinum Sponsor</td>
              <td className="gold">Recognized as Gold Sponsor</td>
              <td></td>
            </tr>
            <tr>
              <th className="category">Leadership Hermosa Beach Email Newsletter</th>
              <td className="platinum">Inclusion and Recognized as Platinum Sponsor</td>
              <td className="gold">Inclusion and Recognized as Gold Sponsor</td>
              <td></td>
            </tr>
            <tr>
              <th className="category">Media Outreach</th>
              <td className="platinum">Recognized as Platinum Sponsor</td>
              <td></td>
              <td></td>
            </tr>
            <tr>
              <th className="category">Verbal Recognition at Unveiling Ceremony</th>
              <td className="platinum">Recognition of Company as Platinum Sponsor</td>
              <td></td>
              <td></td>
            </tr>
          </table>
        </div>
        <Link id="sponsorClick" to="/sponsorship/payment">Sponsor Us today</Link>
        <p>*For personalized sponsorship packages or questions, contact Fundraising Chair Eric Foster at <a className="contact" href="mailto:valleyforall@gmail.com">ValleyForAll@gmail.com</a> or <a className="contact" href="tel:310-877-3822">310-877-3822</a></p>
      </StyledSponsorship>
    <Sponsors />
    </>
  )
}
