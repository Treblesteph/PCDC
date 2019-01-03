import React, { Component } from 'react';

import Header from '../Header'
import Footer from '../Footer'
import './About.scss';

class About extends Component {
  render() {
    return(
      <div className='main'>
        <Header />
        <div className='banner'>
          <div className='title'></div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default About;