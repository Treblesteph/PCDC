import React, { Component } from 'react';

import CaseStudy from '../CaseStudy'
import Header from '../Header'
import Footer from '../Footer'
import './CaseStudies.scss';

class CaseStudies extends Component {

  createStudies = () => {
    const { content } = this.props
    if (content) {
      const studies = content.map(study => {
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
      return studies
    }
  }

  render() {
    const studies = this.createStudies()
    console.log({studies})
    return(
      <div>
        <Header />
        <div className='container'>
          {studies}
        </div>
        <Footer />
      </div>
    )
  }
}

export default CaseStudies;