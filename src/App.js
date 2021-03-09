import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import Project from './components/Project';
import Organization from './components/Organization.js';
import Sponsorship from './components/Sponsorship.js';
import Donate from './components/Donate';
import styled from 'styled-components';
import parkImg from './assets/images/valley-park.png';

const StyledApp = styled.div`
  .hero {
    background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .4), rgba(0, 0, 0, 0)), url(${parkImg});
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    justify-content: center;
    min-height: 100vh;
  }

  .blur {
    backdrop-filter: blur(6px);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-height: 90vh;
  }

`


function App() {
  return (
    <StyledApp className="App">
      <Nav />
      <div className="hero">
        <div className="blur">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/project" component={Project} />
            <Route path="/organization" component={Organization} />
            <Route path="/sponsorship" component={Sponsorship}/>
            <Route path="/donate" component={Donate} />
          </Switch>
         </div>
      </div>
    </StyledApp>
  );
}

export default App;
