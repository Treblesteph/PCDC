import React, { Component } from 'react';

import CaseStudy from '../CaseStudy'
import './CaseStudies.css';

class CaseStudies extends Component {

  componentDidMount () {
    this.createStudies()
  }

  createStudies = () => {
    const { content } = this.props
    if (content) {
      content.map(study => {
        const title = study.title
        const profile = study.profileImage.fields.file.url
        const summary = study.summary
        const text = study.paragraph.content
        return (
          <CaseStudy
            title={title}
            profile={profile}
            summary={summary}
            text={text}
          />
        )
      })
    }
  }

  render() {    
    return(
      <div>Hello here is CaseStudies</div>
    )
  }
}

export default CaseStudies;