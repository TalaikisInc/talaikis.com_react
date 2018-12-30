import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

class Quote extends PureComponent {
  render() {
    return (
        <div className="item">
        <blockquote>
          <div className="row">
            <div className="col-sm-8 col-sm-offset-2">
              <p>{ this.props.text } </p>
              <small>{ this.props.name }</small>
            </div>
          </div>
        </blockquote>
      </div>
    )
  }
}

Quote.propTypes = {
  text: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired
}

export default Quote
