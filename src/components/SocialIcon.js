import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class SocialIcon extends PureComponent {
  render() {
    const { network } = this.props
    const networkClass = `icon-${network}`
    const netName = network.charAt(0).toUpperCase() + network.slice(1)

    return (
        <li><a href={this.props.url} className={networkClass} rel="nofollow">{ netName }</a></li>
    )
  }
}

SocialIcon.propTypes = {
  network: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired
}

export default SocialIcon
