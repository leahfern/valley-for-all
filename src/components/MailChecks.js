import React from 'react';
import styled from 'styled-components';

const StyledChecks = styled.div`
  color: white;
  width: 800px;
  max-width: 90%;
  margin: 0 auto;
  h2 {
    font-weight: 700;
    font-size: 3rem;
    color: white;
    margin: 10rem auto 1rem auto;
    text-transform: uppercase;
  }
  h3 {
    margin-bottom: 3rem;
    font-size: 2rem;
    text-transform: uppercase;
  }
 p {
   font-size: 1.2rem;
   margin: 3rem;
   line-height: 1.5;
 }
 p.address {
   font-size: 1.5rem;
 }
`

export default function MailChecks() {
  return (
    <StyledChecks className="component-container">
      <h2>
        VALLEY FOR ALL
      </h2>
      <h3>
        DONATE
      </h3>
      <p>
        Please make checks payable to “Leadership Hermosa Beach” with reference to "Valley For All". We will send your tax receipt to the email address provided, unless directed otherwise.
      </p>
      <p className="address">
        Leadership Hermosa Beach <br />
        PO Box 362<br />
        Hermosa Beach, CA 90254
      </p>
      <p>All Donations are 100% tax deductible. The Leadership Hermosa Beach tax ID no. is 06-1721283</p>
    </StyledChecks>
  )
}
