import React from 'react';

//Router
import { Switch, Route } from 'react-router-dom';

//Styles
import GlobalStyle from './components/GlobalStyle';

//Components
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';
import ScrollToTop from './components/ScrollToTop';
import PortfolioDetail from './components/PortfolioDetail';

function App() {
  return (
    <div>
      <ScrollToTop />
      <GlobalStyle />
      <Nav/>     
      <Switch>
        <Route exact path="/">
          <AboutUs/>
        </Route>
        <Route path="/portfolio" exact>
          <Portfolio/>
        </Route>
        <Route path="/portfolio/:id">
          <PortfolioDetail />
        </Route>
        <Route path="/contact">
          <ContactMe/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
