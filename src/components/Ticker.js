import React from 'react';
import styled from 'styled-components';

const StyledTicker = styled.div`
  height: 50px;
  background: #36454F;
  color: white;
  display: flex;

  div.thank-you {
    background: #36454F;
    width: 120px;
    line-height: 50px;
  }

`

export default function Ticker() {
  return (
    <StyledTicker>
      <div className="thank-you">Thank you: </div>
      <Ticker offset="50%">
        <p className="scroll">
          BCHD Ryan and Karen Nowicki Jessica Guheen kathy dunbabin Lindy Murrell PJ Harari Beth Rohrer AccaTull Family Julia Ann Roberts Cammie Herbert Randall N Kirk Sylvia Zamarripa Jeff Raedy Tortuga Wealth Management joshua campbell Jenn and Mark Auville Diana Garcia Sharon Paul Brittny Burford Jennifer Froehlich
        </p>
      </Ticker>
    </StyledTicker>
  )
}
