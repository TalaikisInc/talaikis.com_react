import React from 'react'
import ReactDOM from 'react-dom'
import App from 'containers/App'
import * as serviceWorker from './serviceWorker'
import 'assets/scss/style.scss'
import 'assets/css/addons.css'

ReactDOM.render(<App />, document.getElementById('root'))

serviceWorker.unregister()
