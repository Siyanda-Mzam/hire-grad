import React from 'react';
//import { Route } from 'react-router-dom';
import Home from './containers/home';
import Employer from './containers/employer';
import SignUp from './containers/sign-up';
import Footer from './components/footer';
import SignIn from './containers/sign-in';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';



const App = () => (
  <div>
    <Router history={browserHistory}>
      <Route exact path="/" component={Home} />
      <Route onEnter={checkAuth}>
        <Route path="/employer" component={Employer} />
        <Route path="/sign-up" component={SignUp} />
        <Route path="/sign-in" component={SignIn} />
      </Route>
      <Footer />
    </Router>
  </div>
);

export default App;
