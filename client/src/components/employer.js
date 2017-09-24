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
    <section className="section columns">
      <div className="column is-half">
        <h2 className="title is-4">Access a curated list of graduates looking for work</h2><br/>
        <h2 className="title is-5">Nullam condimentum</h2>
        <h3 className="subtitle is-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </h3>
        <br/>
        <h2 className="title is-5">Fringilla elit</h2>
        <h3 className="subtitle is-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </h3>
      </div>
      <div className="column is-half">
        <div className="content">
            <div className="card-image">
              <figure className="">
                <img src="https://placehold.it/320x280" alt="Image" />
              </figure>
            </div>
        </div>
      </div>
    </section>

    <section className="columns section">
    <div className="column is-half container">
      <div className="content">
          <div className="card-image">
            <figure className="">
                <img src="https://placehold.it/320x280" alt="Image" />
            </figure>
          </div>
      </div>
    </div>
      <div className="column is-half section">
        <h2 className="title is-4">Make insightful hiring decisions</h2>
        <p></p>
        <p className="subtitle is-5">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
        </p>
      </div>
    </section>
  </div>
  );

}

export default Employer;
