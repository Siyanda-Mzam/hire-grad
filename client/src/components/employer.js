import React from 'react';
import Hero from './hero';
import HowWorks from '../containers/how';
import Loader from './loader';
import WhyDoIt from './why';


const Employer = ({item}) => {
  if (!item) {
    return (
      <div><Loader/></div>
    );
  }
  return (
  <div className="">
    <Hero item={item}/>
    <div className="">
      <div className="section">
        <div className="container">
        <div className="content">
        <h1>Access a curated list of graduates</h1>
        <br />
        <h4><strong>Only the best</strong></h4>
        <p>Our team curates the graduates who apply to GenZ and you’ll only see top candidates.</p>
        <br/>
        <h4><strong>Ready to move</strong></h4>
        <p>Discover talented graduates ready to grow their careers</p>
        </div>
        </div>
      </div>
    </div>
  </div>
  );

}

export default Employer;
