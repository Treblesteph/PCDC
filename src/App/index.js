import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'
import * as contentful from 'contentful';

import About from '../About'
import CaseStudies from '../CaseStudies'
import GetInvolved from '../GetInvolved'
import News from '../News'
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = { content: {} }
  }

  async componentDidMount () {
    this.getContent()
  }

  getContent = async () => {
    const client = contentful.createClient({
      space: 'uds3sqziz2cb',
      accessToken: 'c8647a11ae2602a02513af81124f608d2f35f18d774e278368ded018697db84e' 
    })

    try {
      const entries = await client.getEntries()
      const caseStudies = []
      entries.items.forEach(entry => {
        if(entry.fields) console.log(entry.sys.contentType.sys.id)
        if (entry.sys.contentType.sys.id === 'caseStudy') {
          caseStudies.push(entry.fields)
        }
        this.setState({ caseStudies })
      })
  
      this.setState({ content: entries })
    } catch (err) {
      console.warn(`Error getting content: ${err}`)
    }
  }

  render() {
    // this.getContent()
    const AboutProps = () => <About /> 
    const CaseStudiesProps = () => <CaseStudies content={this.state.caseStudies}/>
    const GetInvolvedProps = () => <GetInvolved />
    const NewsProps = () => <News />
    return (
      <Switch>
        <Route exact path='/' render={AboutProps} />
        <Route exact path='/CaseStudies' render={CaseStudiesProps} />
        <Route exact path='/GetInvolved' render={GetInvolvedProps} />
        <Route exact path='/News' render={NewsProps} />
      </Switch>
    );
  }
}

export default withRouter(App);
