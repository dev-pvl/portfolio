import React from 'react'
import { Switch, Route } from 'react-router-dom'
import Home from './Home'
import About from './About'
import Skills from './Skills'
import Work from './Work'

class Main extends React.Component {
  render() {
    return (
      <main>
        <Switch>
          <Route exact path='/' component={Home}/>
          <Route path='/about' component={About}/>
          <Route path='/skills' component={Skills}/>
          <Route path='/work' component={Work}/>
        </Switch>
      </main>
    )
  }
}

export default Main
