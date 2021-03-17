import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import {Route, Switch} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Sponsorship from './components/Sponsorship.js';
import Donate from './components/Donate';
import styled from 'styled-components';
import parkImg from './assets/images/valley-park.png';
import Checkout from './components/Checkout';

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
    min-height: calc(100vh - 60px);
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
        <div className="content">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/sponsorship" component={Sponsorship}/>
            <Route path="/donate" component={Donate} />
            <Route path="/checkout" component={Checkout} />
          </Switch>
        </div>
      </div>
    </StyledApp>
  );
}

export default App;
