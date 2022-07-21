import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { CCU } from './components/documents/ccu'
import { Home } from './Home'
import { Concession } from './components/documents/concession'
import { Network } from './components/documents/network'
import { PUEAA } from './components/documents/pueaa'
import { Rates } from './components/documents/rates'
import { RUPS } from './components/documents/rups'
import { Statutes } from './components/documents/statutes'

const App = () => {
  return (
    <Router>
    <Switch>
      <Route exact path="/ccu" component={CCU} />
      <Route exact path="/concession" component={Concession}/>
      <Route exact path="/network" component={Network} />
      <Route exact path="/pueaa" component={PUEAA}/>
      <Route exact path="/rates" component={Rates}/>
      <Route exact path="/rups" component={RUPS}/>
      <Route exact path="/statutes" component={Statutes}/>
      <Route exact path="*" component={Home} />
    </Switch>
  </Router>
  )
}

export default App