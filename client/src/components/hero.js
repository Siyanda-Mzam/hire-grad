import React from 'react';
import Nav from './nav';
import hireGrad from '../../res/images/hire-grad.gif'
const Hero = () => (
    <section className="hero bg">
      <div className="hero-body columns">
        <div className="container">
          <div className="columns">
            <div className="column is-8">
              <h1 className="title">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h1>
              <h2 className="is-10 subtitle">Quacumque enim ingredimur, in aliqua historia vestigium ponimus. Bonum valitudo: miser morbus. Familiares nostros, credo, Sironem dicis et Philodemum, cum optimos viros, tum homines doctissimos.</h2>
                <div className="field has-addons">
                  <p className="control">
                    <span className="select">
                      <select>
                        <option>I am a graduate</option>
                        <option>I am an employer</option>
                      </select>
                    </span>
                  </p>
                  <p className="control">
                    <input type="text" className="input" placeholder="Email address"/>
                  </p>
                  <p className="control">
                    <a href="" className="button is-info">Get started</a>
                  </p>
                </div>
            </div>
            <div className="column pull-up">
              <img src={hireGrad} />
            </div>
          </div>
        </div>
      </div>
    </section>
);
export default Hero;
