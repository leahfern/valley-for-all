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
import Checkout from './components/Checkout';

const StyledApp = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, .4), rgba(0, 0, 0, 0)), url(${parkImg});
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
  min-height: 100vh;
  display: flex;
  align-items: center;


  .blur {
    margin-top: 50px;
    height: 100%;
    backdrop-filter: blur(6px);
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;    
  }

`


function App() {
  return (
    <StyledApp className="App">
      <Nav />
        <div className="blur">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/project" component={Project} />
            <Route path="/organization" component={Organization} />
            <Route path="/sponsorship" component={Sponsorship}/>
            <Route path="/donate" component={Donate} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
         </div>
    </StyledApp>
  );
}

export default App;
