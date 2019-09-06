import React, { PureComponent } from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from 'containers/Home'
import PrivacyPolicy from 'containers/PrivacyPolicy'

class App extends PureComponent {
  render () {
    return (
      <BrowserRouter>
        <Route path="/" exact component={Home} />
        <Route path="/privacy-policy" component={PrivacyPolicy} />
      </BrowserRouter>
    )
  }
}

export default App
