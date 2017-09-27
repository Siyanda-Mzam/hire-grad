import React from 'react';

const listCompanies = () => {
  const companies = [],
        companiesPerRow = 4;
  for (let i = 0; i < companiesPerRow; i++) {
    companies.push(
      <div className="column is-3">
        <div className="card">
          <a href="/somewhere">
            <div className="card-image">
              <figure className="image is-square">
                <img src="https://placehold.it/1280x960" alt="Image" />
              </figure>
            </div>
          </a>
        </div>
      </div>
    );
  }
  return companies;
}

const CompanyList = () => (
  <div className="section">
    <div className="container">

      <div className="hero-cta pull-up">
      <nav className="container">
        <div className=" has-text-centered">
          <p className="title">Here are a few of the hundreds of institutions that you could get offers from</p>
        </div>
      </nav>
      </div>
      <div className="container section">
      <div className="columns">
        {listCompanies()}
      </div>

      <div className="columns">
        {listCompanies()}
      </div>
      <div className="has-text-centered"><a href="see-all" className="button is-primary is-outlined is-medium">View all companies</a></div>
      </div>
    </div>

  </div>
);

export default CompanyList;
