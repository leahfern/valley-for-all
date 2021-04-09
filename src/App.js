import React, { useEffect } from 'react';
import './App.css';
import Nav from './components/Nav';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Sponsorship from './components/Sponsorship.js';
import Donate from './components/Donate';
import styled from 'styled-components';
import parkImg from './assets/images/valley-park.jpg';
import MailChecks from './components/MailChecks';
import SponsorDonate from './components/SponsorDonate';
import ReactGA from 'react-ga';
import BottomNav from './components/BottomNav';
import Bricks from './components/Bricks';
import DonateLanding from './components/DonateLanding';
import BrickUpgrade from './components/BrickUpgrade';

//google analytics
const TRACKING_ID = "UA-193586281-1";


const StyledApp = styled.div`
  background-image: linear-gradient(RGBa(5, 90, 25, .5), rgba(12, 12, 12, .7), rgba(5, 90, 25, .5)), url(${parkImg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-position: center center;
  background-size: cover;
  font-family: 'Roboto Slab', serif;

  .navPadding{
    height: 50px;
  }
  .blur {
    min-height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

`

function App() {

  useEffect(() => {
    ReactGA.initialize(TRACKING_ID);
  }, [])

  return (
    <StyledApp className="App">
      <Nav /> 
      <div className="blur">
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route exact path="/sponsorship" component={Sponsorship}/>
            <Route exact path="/donate" component={DonateLanding} />
            <Route exact path="/donate/straight" component={Donate} />
            <Route exact path="/donate/check" component={MailChecks} />
            <Route exact path="/sponsorship/payment" component={SponsorDonate} />
            <Route exact path="/bricks" component={Bricks} />
            <Route exact path="/bricks/upgrade" component={BrickUpgrade} />
          </Switch>
        </div>
      </div>
      <BottomNav />
    </StyledApp>
  );
}

export default App;
