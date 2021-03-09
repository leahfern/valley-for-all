import React from 'react';
import styled from 'styled-components';

const StyledProject = styled.div`
  h2 {
    padding-top: 1rem;
    font-size: 3rem;
    color: white;
    margin: 0 auto 2rem auto;
    text-transform: uppercase;
  }
  h2, p {
    width: 600px;
    color: white;
  }
  p {
    padding: 1rem 0;
    margin: 0 auto;
    line-height: 1.5;
  }
  iframe {
    margin: 1rem 0;
    height: 40vh;
    width: 30vw;
  }
`

export default function Project() {
  return (
    <StyledProject className="component-container">
      <h2>
        About our Project
      </h2>
      <p>
        “Valley for All” is a local community project committed to improving and restoring the popular, high-traffic lower BBQ area of Valley Park in Hermosa Beach -- a space in dire need of attention.
      </p>

      <p className="lastp">
        Encouraging community engagement, “Valley for All” will feature upgraded amenities, improved area conditions and a more functional space for all park-goers in Valley Park.
      </p>

      <iframe src="https://docs.google.com/presentation/d/e/2PACX-1vQeIIT9XxrwtVq5dtXu0flVXcKGLS88PLmdXSVXrQ8cBLKflxsu4ESnJUrQ5mroA0b5Fcqh_jki35y2/embed?start=true&loop=false&delayms=3000" frameborder="0" width="1440" height="839" allowfullscreen="true" mozallowfullscreen="true" webkitallowfullscreen="true" title="Valley For All slideshow"></iframe>
    </StyledProject>
  )
}
