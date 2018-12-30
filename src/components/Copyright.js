import React, { PureComponent } from 'react'
import config from 'config'

class Copyright extends PureComponent {
  render() {
    return (
        <p className="text-center margin-top-30">
           &copy; Copyright { new Date().getFullYear() } <a href="/">{ config.siteName }</a> 
         </p>
    )
  }
}

export default Copyright
