import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Home from 'pages/Home';
import NotFound from 'pages/NotFound';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path="*" component={NotFound} /> 
      </Switch>
    </Router>
  );
}
