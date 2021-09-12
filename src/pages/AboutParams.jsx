import {Switch, Route, useParams, useRouteMatch} from 'react-router-dom'
import {AboutAuthor, AboutApp} from 'pages/About'
import NotFound from 'pages/NotFound'

function AboutParams() {
  const {about_page} = useParams()
  const {path} = useRouteMatch
  
  return(
    <Switch>
      {about_page === 'about-author' && <Route path={path} component={AboutAuthor}/>}
      {about_page === 'about-app' && <Route path={path} component={AboutApp}/>}
      <Route path={path} component={NotFound}/> 
    </Switch>
  )
}

export default AboutParams
