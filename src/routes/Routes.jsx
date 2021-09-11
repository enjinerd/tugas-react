import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './About'
import Home from 'pages/Home';
import NotFound from 'pages/NotFound';
import Form from 'pages/Form'

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="/about" component={About} />
        <Route path="/form" component={Form} />
        <Route path="*" component={NotFound} />
      </Switch>
    </Router>
  );
}
