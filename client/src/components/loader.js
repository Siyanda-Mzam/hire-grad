import React, { Component } from 'react';

class Loader extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="demo">
        <svg className="loader">
    <filter id="blur">
      <fegaussianblur in="SourceGraphic" stdDeviation="2"></fegaussianblur>
    </filter>
    <circle cx="75" cy="75" r="60" fill="transparent" stroke="#F4F519" strokeWidth="6" strokeLinecap="round" strokeDasharray="385" strokeDashoffset="385" filter="url(#blur)"></circle>
        </svg>
        <svg className="loader loader-2">
    <circle cx="75" cy="75" r="60" fill="transparent" stroke="#DE2FFF" strokeWidth="6" strokeLinecap="round" strokeDasharray="385" strokeDashoffset="385" filter="url(#blur)"></circle>
        </svg>
        <svg className="loader loader-3">
    <circle cx="75" cy="75" r="60" fill="transparent" stroke="#FF5932" strokeWidth="6" strokeLinecap="round" strokeDasharray="385" strokeDashoffset="385" filter="url(#blur)"></circle>
        </svg>
        <svg className="loader loader-4">
    <circle cx="75" cy="75" r="60" fill="transparent" stroke="#E97E42" strokeWidth="6" strokeLinecap="round" strokeDasharray="385" strokeDashoffset="385" filter="url(#blur)"></circle>
        </svg>
        <svg className="loader loader-5">
    <circle cx="75" cy="75" r="60" fill="transparent" stroke="white" strokeWidth="6" strokeLinecap="round" filter="url(#blur)"></circle>
        </svg>
        <svg className="loader loader-6">
    <circle cx="75" cy="75" r="60" fill="transparent" stroke="#00DCA3" strokeWidth="6" strokeLinecap="round" strokeDasharray="385" strokeDashoffset="385" filter="url(#blur)"></circle>
        </svg>
        <svg className="loader loader-7">
    <circle cx="75" cy="75" r="60" fill="transparent" stroke="purple" strokeWidth="6" strokeLinecap="round" strokeDasharray="385" strokeDashoffset="385" filter="url(#blur)"></circle>
        </svg>
        <svg className="loader loader-8">
    <circle cx="75" cy="75" r="60" fill="transparent" stroke="#AAEA33" strokeWidth="6" strokeLinecap="round" strokeDasharray="385" strokeDashoffset="385" filter="url(#blur)"></circle>
        </svg>
      </div>
    );
  }
}

export default Loader;
