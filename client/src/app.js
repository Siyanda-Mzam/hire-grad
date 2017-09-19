import React from 'react';
import { Route } from 'react-router-dom';
import Home from './components/home';
import Hero from './components/hero';
import ItemView from './containers/list_item_view';

const App = () => (
  <div>
    <Hero />
    <Route exact path="/" component={Home} />
    <Route exact path="/view/:name" component={ItemView} />
  </div>
);

export default App;
