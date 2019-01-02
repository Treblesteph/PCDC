import React, { Component } from 'react';
import { Switch, Route } from 'react-router-dom'
import { withRouter } from 'react-router'

import About from '../About'
import CaseStudies from '../CaseStudies'
import GetInvolved from '../GetInvolved'
import News from '../News'
import './App.css';

class App extends Component {
  render() {
    const AboutProps = () => <About /> 
    const CaseStudiesProps = () => <CaseStudies />
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
