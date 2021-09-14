import React from 'react'
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import {About as AboutPage} from 'pages/About'
import AboutParams from 'pages/AboutParams'

const About = () => {
  const {path} = useRouteMatch()

  return (
    <Switch>
      <Route exact path={path}>
        <AboutPage/>
      </Route>
      <Route path={`${path}/:about_page`}>
        <AboutParams/>
      </Route>
    </Switch>
  )
}

export default About
