import React from 'react';
import { Route } from 'react-router-dom';
import Home from './containers/home';
import ItemView from './containers/list_item_view';
import Employer from './containers/employer';
import ListItemPreview from './containers/list_item_preview';

import Footer from './components/footer';

const App = () => (
  <div>
    <Route exact path="/" component={Home} />
    <Route exact path="/employer" component={Employer} />
    <Route exact path="/view/:name" component={ItemView} />
    <Footer />
  </div>
);

export default App;
