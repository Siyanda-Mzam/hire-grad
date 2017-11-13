import React, { Component } from 'react';

class RoadMap extends Component {
  render() {
    return (
      <div className="section roadmap">
        <div className="container">
          <div className="card">
          <header className="card-header">
            <p className="card-header-title">
              Roadmap
            </p>
          </header>
            <div className="card-content">
              <div className="content">
                <section id="conference-timeline">
                  <div className="timeline-start">Start</div>
                  <div className="conference-center-line"></div>
                  <div className="conference-timeline-content">
                    <div className="timeline-article">
                      <div className="content-left-container">
                        <div className="content-left">
                          <p>
                            When I orbited the Earth in a spaceship, I saw for
                            the first time how beautiful our planet is. Mankind,
                            let us preserve and increase this beauty, and not
                            destroy it!
                            <span className="article-number">01</span>
                          </p>
                        </div>
                      </div>
                      <div className="content-right-container">
                        <div className="content-right">
                          <p>
                            When I orbited the Earth in a spaceship, I saw for
                            the first time how beautiful our planet is.
                            <span className="article-number">02</span>
                          </p>
                        </div>
                      </div>
                      <div className="meta-date">
                        <span className="date">2014</span>
                      </div>
                    </div>

                    <div className="timeline-article">
                      <div className="content-left-container">
                        <div className="content-left">
                          <p>
                            When I orbited the Earth in a spaceship, I saw for
                            the first time how beautiful our planet is. Mankind,
                            let us preserve and increase this beauty, and not
                            destroy it!
                            <span className="article-number">01</span>
                          </p>
                        </div>
                      </div>
                      <div className="content-right-container">
                        <div className="content-right">
                          <p>
                            When I orbited the Earth in a spaceship, I saw for
                            the first time how beautiful our planet is.
                            <span className="article-number">02</span>
                          </p>
                        </div>
                      </div>
                      <div className="meta-date">
                        <span className="date">2015</span>
                      </div>
                    </div>

                    <div className="timeline-article">
                      <div className="content-left-container">
                        <div className="content-left">
                          <p>
                            When I orbited the Earth in a spaceship, I saw for
                            the first time how beautiful our planet is. Mankind,
                            let us preserve and increase this beauty, and not
                            destroy it!
                            <span className="article-number">01</span>
                          </p>
                        </div>
                      </div>
                      <div className="content-right-container">
                        <div className="content-right">
                          <p>
                            When I orbited the Earth in a spaceship, I saw for
                            the first time how beautiful our planet is.
                            <span className="article-number">02</span>
                          </p>
                        </div>
                      </div>
                      <div className="meta-date">
                        <span className="date">2016</span>
                      </div>
                    </div>
                  </div>
                  <div className="timeline-end">End</div>
                </section>
              </div>
            </div>

            <footer className="card-footer">
              {this.props.parentProps.isEdit ? <a href="#" className="card-footer-item">Save</a> : ''}
            </footer>
          </div>
        </div>
      </div>
    );
  }
}

export default RoadMap;
