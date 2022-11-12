import React from 'react';

//Router
import { Switch, Route } from 'react-router-dom';

//Styles
import GlobalStyle from './components/GlobalStyle';

//Icons
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faDatabase } from '@fortawesome/free-solid-svg-icons';

//Components
import Nav from './components/Nav';
import AboutUs from './pages/AboutUs';
import Portfolio from './pages/Portfolio';
import ContactMe from './pages/ContactMe';
import ScrollToTop from './components/ScrollToTop';
import PortfolioDetail from './components/PortfolioDetail';

function App() {

  library.add(fab, faDatabase);

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
