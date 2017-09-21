import React from 'react';

const CompanyList = () => (
  <div className="container section">
    <div className="hero-cta">
      <nav className="container">
        <div className=" has-text-centered">
          <p className="title">Here are a few of the hundreds of institutions that you could get offers from</p>
        </div>
      </nav>
    </div>
    <div className="container section">
      <div className="columns">

        <div className="column is-4">
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

        <div className="column is-4">
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

        <div className="column is-4">
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

      </div>

      <div className="columns">

        <div className="column is-4">
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

        <div className="column is-4">
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

        <div className="column is-4">
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
      </div>
      <div className="has-text-centered"><a href="see-all" className="button is-primary is-outlined is-medium">View all companies</a></div>
    </div>
  </div>
);

export default CompanyList;
