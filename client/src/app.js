import React from 'react';
import { Route } from 'react-router-dom';
import Hero from './components/hero';
import Home from './components/home';
import ItemView from './containers/list_item_view';
import Employer from './components/employer';
import HowWorks from './components/how';

const App = () => (
  <div>
    <Hero />
    <HowWorks/>
    <Route exact path="/" component={Home} />
    <Route exact path="/employer" component={Employer} />
    <Route exact path="/view/:name" component={ItemView} />
  </div>
);

export default App;
