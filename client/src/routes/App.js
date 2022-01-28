import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from '../views/Home';
import '../styles/general.css';

function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Switch>
    </Router>

  );
}

export default App;