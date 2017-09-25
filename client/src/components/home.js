import React from 'react';
import Hero from './hero';
import CompanyList from './companylist';
import HowWorks from './how';
import WhyDoIt from './why';
import ApplyNow from './applynow';

const Home = ({category}) => (
  <div>
    <Hero item={category}/>
    <HowWorks/>
    <CompanyList />
    <WhyDoIt />
    <ApplyNow />
  </div>
);

export default Home;
