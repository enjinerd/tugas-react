import React from 'react'
import {Route, Switch, Redirect, useRouteMatch, useParams } from 'react-router-dom';
import {About as AboutPage, AboutAuthor, AboutApp} from 'pages/About'
import NotFound from 'pages/NotFound'
import AboutParams from 'pages/AboutParams'

const About = () => {
  const {path} = useRouteMatch()
  const {about_page} = useParams()

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
