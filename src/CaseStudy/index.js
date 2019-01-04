import React, { Component } from 'react';

import './CaseStudy.scss';

class CaseStudy extends Component {
  render() {
    return(
      <div className='main'>
        {this.props.summary}
      </div>
    )
  }
}

export default CaseStudy;