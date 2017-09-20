import React from 'react';
import ListItems from '../containers/list_items';
import ListItemPreview from '../containers/list_item_preview';

const Home = () => (
  <div className="block container">
    <div className="columns">
      <div className="column is-half">
        <video poster="http://coolwildlife.com/wp-content/uploads/galleries/post-3004/Fox%20Picture%20003.jpg" controls>
          <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4" />
          <source src="http://techslides.com/demos/sample-videos/small.mp4" type="video/mp4"/>
        </video>
      </div>
      <div className="column">
      </div>
    </div>
  </div>
);

export default Home;
