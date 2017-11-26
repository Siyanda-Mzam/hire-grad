import React from 'react';
import Hero from '../shared/hero';
import ApplyNow from '../shared/applynow';
import HowWorks from '../../containers/how';
import Pricing from './pricing';
import HiringInsights from './hiringInsights';
import WhyHireGrads from './whyHireGrads';

const Employer = ({item, howItWorks, user}) => {
  if (!item) {
    return (
      <div><Loader/></div>
    );
  }
  return (
  <div className="">
    <Hero item={item}/>
		<WhyHireGrads/>
		<HiringInsights/>
    <HowWorks howItWorks={howItWorks}/>
		<Pricing/>
    <ApplyNow applynow={item}/>
  </div>
  );

}

export default Employer;
