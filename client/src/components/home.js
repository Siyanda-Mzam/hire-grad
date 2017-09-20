import React from 'react';
import ListItems from '../containers/list_items';
import ListItemPreview from '../containers/list_item_preview';

const Home = () => (
  <div className="block container">
    <div className="columns">
      <div className="column is-half">
        <p className="notification">Video Content Goes Here</p>
      </div>
      <div className="column">
        <p className="notification">Visual How It Works Goes Here</p>
      </div>
    </div>
  </div>
);

export default Home;
