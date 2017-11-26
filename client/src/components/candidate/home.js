import React from 'react';
import Hero from '../shared/hero';
import CompanyList from './companylist';
import HowWorks from '../shared/how';
import WhyDoIt from './why';
import ApplyNow from '../shared/applynow';

const Home = ({category, howItWorks}) => (
  <div>
    <Hero item={category}/>
    <HowWorks howItWorks={howItWorks}/>
    <CompanyList />
    <WhyDoIt />
    <ApplyNow applynow={category}/>
  </div>
);

export default Home;
