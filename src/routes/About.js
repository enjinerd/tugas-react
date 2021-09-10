import React from 'react'
import {Route, Switch, useRouteMatch } from 'react-router-dom';
import {About as AboutPage, AboutAuthor, AboutApp} from 'pages/About'

const About = () => {
  const {path} = useRouteMatch()
  return (
    <Switch>
      <Route exact path={path}>
        <AboutPage/> 
      </Route>
      <Route path={`${path}/about-author`}>
        <AboutAuthor/>
      </Route>
      <Route path={`${path}/about-app`}>
        <AboutApp/>
      </Route>

    </Switch>
  )
}

export default About
