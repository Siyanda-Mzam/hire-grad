import React from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/home';
import Employer from './containers/employer';

import Footer from './components/footer';

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/employer" component={Employer} />
    <Footer />
  </div>
);

export default App;
