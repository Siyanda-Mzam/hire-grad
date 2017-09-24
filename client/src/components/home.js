import React from 'react';
import ListItems from '../containers/list_items';
import ListItemPreview from '../containers/list_item_preview';

import Hero from './hero';
import CompanyList from './companylist';
import HowWorks from './how';
import WhyDoIt from './why';

const Home = ({category}) => (
  <div>
    <Hero item={category}/>
    <HowWorks/>
    <CompanyList />
    <WhyDoIt />
  </div>
);

export default Home;
