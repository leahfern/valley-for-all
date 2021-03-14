import React from 'react'
import styled from 'styled-components';

const StyledSponsorship = styled.div`
  color: white;
  padding-top: 50px;

  h2 {
    font-size: 3rem;
    padding: 1rem .5rem 3rem .5rem;
  }

  h4 {
    font-size: 2rem;
    color: red;
    background: white;
    width: 500px;
    margin: 0 auto;
    padding: 0 .5rem;
  }
  ul {
    text-align: left;
    width: 500px;
    margin: 0 auto;
    padding: 1rem .5rem;
    font-size: 1.2rem;
  }
  .level {
    padding: 1rem 0;
  }

  button {
    background-color: RGB(64, 150, 190);
    margin: 1rem auto 1rem auto;
    padding: .8rem;
    color: white;
    text-decoration: none;
    font-weight: bold;
    border-radius: 10px;
    border: none;

    :hover {
      transform: scale(1.1);
      transition: .5s;
    }
  }
`;

export default function Sponsorship() {
  return (
    <StyledSponsorship className="component-container">
      <h2>Sponsorship Opportunities</h2>
      <section id="levels">
      <div className="level">
          <h4>Level 1 Sponsor - $1,000 +</h4>
            <ul>
              <li>Permanent recognition in the park</li>
              <li>Social media mentions</li>
            </ul>
            <button>Become a Level 1 Sponsor</button>
        </div>
        <div className="level">
          <h4>Level 2 Sponsor - $2,000 +</h4>
            <ul>
              <li>Permanent recognition in the park</li>
              <li>Social media mentions</li>
              <li>Dedicated social media posts</li>
              <li></li>
            </ul>
            <button>Become a Level 2 Sponsor</button>
        </div>
        <div className="level">
          <h4>Level 3 Sponsor - $5,000 +</h4>
            <ul>
              <li>Permanent recognition in the park</li>
              <li>Social media mentions</li>
              <li>Dedicated social media posts</li>
              <li>Banner at unveiling event</li>
            </ul>
            <button>Become a Level 3 Sponsor</button>
        </div>
      </section>
    </StyledSponsorship>
  )
}
