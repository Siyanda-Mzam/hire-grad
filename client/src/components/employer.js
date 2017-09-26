import React from 'react';
import Hero from './hero';
import HowWorks from '../containers/how';
import Loader from './loader';
import WhyDoIt from './why';
import ApplyNow from './applynow';


const Employer = ({item, howItWorks}) => {
  if (!item) {
    return (
      <div><Loader/></div>
    );
  }
  return (
  <div className="">
    <Hero item={item}/>
    <div className="section">
        <div className="container">
          <div className="columns">
            <div className="column is-7 is-half content">
              <h1>Access a curated list of graduates</h1>
              <br />
              <h4><strong>Only the best</strong></h4>
              <p>Our team curates the graduates who apply to GenZ and you’ll only see top candidates.</p>
              <br/>
              <h4><strong>Ready to move</strong></h4>
              <p>Discover talented graduates ready to grow their careers</p>
            </div>
            <div className="section column is-5 is-half content">

            <div className="card">
              <div className="card-content">
                <div className="media">
                  <div className="media-left">
                    <figure id="sample-image" className="image is-100x100">
                      <img src="https://placehold.it/280" alt="Placeholder image" />
                    </figure>
                  </div>
                  <div className="media-content">
                    <p className="title is-4">Morongoa Masebe</p>
                    <p className="subtitle is-6">M.A. Political Studies</p>
                    <span className="media-details">
                    <table className="table is-narrow">
                      <tbody>
                        <tr>
                          <td>
                            <i className="fa fa-map-marker" aria-hidden="true"></i>
                          </td>
                          <td>
                            <span className=" subtitle is-6 card-text-pull">
                              Johannesburg
                            </span>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <i className="fa fa-money" aria-hidden="true"></i>
                          </td>
                          <td>
                            <span className=" subtitle is-6 card-text-pull">
                              R55 000/month
                            </span>
                          </td>
                        </tr>

                        <tr>
                          <td>
                            <i className="fa fa-graduation-cap" aria-hidden="true"></i>
                          </td>
                          <td>
                            <span className=" subtitle is-6 card-text-pull">
                              Rhodes University
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                    </span>
                  </div>
                </div>
              </div>
            </div>


            </div>
          </div>
        </div>
    </div>

    <div className="section grey-band">
        <div className="container">
          <div className="columns">
            <div className="column is-5 is-half">
              <div className="media-content">
                <p className="title is-4 has-text-centered">Competing offers</p>
                <span className="media-details has-text-centered">
                  <p>BSc. Mathematics</p>
                  <p>R15 000/month</p>
                  <br/>
                  <p>Hons Sociology </p>
                  <p>R25 000/month</p>
                  <br/>
                  <p>M.A Physics</p>
                  <p>R50 000/month</p>
                </span>
              </div>
            </div>
            <div className="column is-7">
              <div className="content">
                <p className="title is-3">Make hiring decisions with insight</p>
                <p className="subtitle">GenZ makes the hiring process transparent.
                  You’re able to see what each candidate is interested in doing next,
                  their preferred salary and even competing offers from other companies.
                </p>
              </div>
            </div>
          </div>
        </div>
    </div>

    <HowWorks howItWorks={howItWorks}/>

    <div className="section grey-band">
        <div className="container">
          <div className="tile is-ancestor">
            <div className="tile is-parent container">
              <article className="tile is-child notification columns">
                <div className="column is-7 has-text-centered">
                  <div className="centered column is-3 navy-band">
                    <div className="">
                      <p className="title is-1">12%</p>
                      <p className="subtitle is-6">success fee</p>
                    </div>
                  </div>
                </div>

                <div className="column is-5">
                  <p className="title">Pricing</p>
                    <p className="subtitle is-5">Signing up for GenZ is free.
                    If you hire someone through GenZ we charge 12% of first year salary.
                    If things do not work out with the graduate in the first 3 months, we will give you the entire fee back.</p>
                </div>
              </article>
            </div>
          </div>
        </div>
    </div>

    <ApplyNow applynow={item}/>
  </div>
  );

}

export default Employer;
