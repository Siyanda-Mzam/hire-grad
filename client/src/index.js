import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import {
  BrowserRouter,
} from 'react-router-dom';
import { AppContainer } from 'react-hot-loader';
import reducers from './reducers/index';
//import App from './app';
import register from './config/serviceWorker.js'



// Components
import Home from './containers/home';
import Employer from './containers/employer';
import SignUp from './containers/sign-up';
import Footer from './components/footer';
import SignIn from './containers/sign-in';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';


/*
Here we are getting the initial state injected by the server. See routes/index.js for more details
 */
const initialState = window.__INITIAL_STATE__; // eslint-disable-line
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const store = createStoreWithMiddleware(reducers);
//const store = createStore(reducers, initialState);


export function checkAuth(nextState, replaceState) {
  let { loggedIn } = store.getState();

  // check if the path isn't dashboard
  // that way we can apply specific logic
  // to display/render the path we want to
  if (nextState.location.pathname !== '/dashboard') {
    if (loggedIn) {
      if (nextState.location.state && nextState.location.pathname) {
        replaceState(null, nextState.location.pathname);
      } else {
        replaceState(null, '/');
      }
    }
  } else {
    // If the user is already logged in, forward them to the homepage
    if (!loggedIn) {
      if (nextState.location.state && nextState.location.pathname) {
        replaceState(null, nextState.location.pathname);
      } else {
        replaceState(null, '/');
      }
    }
  }
}


/*
While creating a store, we will inject the initial state we received from the server to our app.
 */
ReactDOM.render(
  <AppContainer>
    <Provider store={store}>
      <BrowserRouter>
        <Router history={browserHistory}>
          <Route exact path="/" component={Home} />
          <Route onEnter={checkAuth}>
            <Route path="/employer" component={Employer} />
            <Route path="/sign-up" component={SignUp} />
            <Route path="/sign-in" component={SignIn} />
          </Route>
          <Footer />
        </Router>
      </BrowserRouter>
    </Provider>
  </AppContainer>,
    document.getElementById('reactbody'),
  );

register();

if (module.hot) {
  module.hot.accept('./app', () => {
    // eslint-disable-next-line
    const nextApp = require('./app').default;
    render(nextApp);
  });
}



// module.hot.accept('./reducers', () => {
//   // eslint-disable-next-line
//   const nextRootReducer = require('./reducers/index');
//   store.replaceReducer(nextRootReducer);
// });
