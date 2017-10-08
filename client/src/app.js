import React from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/home';
import Employer from './containers/employer';
import SignUp from './containers/sign-up';
import Footer from './components/footer';

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/employer" component={Employer} />
    <Route exact path="/sign-up" component={SignUp} />
    <Footer />
  </div>
);

export default App;
