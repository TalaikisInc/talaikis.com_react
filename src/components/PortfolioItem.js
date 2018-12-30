import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

const white = {
  color: 'white'
}

class PortfolioItem extends PureComponent {
  render() {
    return (
      <div className="col-md-4 col-sm-6 col-xs-6 mix-target web" key={this.props.id}>
        <figure key={this.props.id}>
          <img src={this.props.image} alt={this.props.title} />
          <figcaption>
            <h3>{ this.props.title }</h3>
            <hr />
            <p style={white}>{ this.props.text }</p>
            <div className="col-sm-6">
              <a href={this.props.url} className="btn btn-orange"> Visit</a>
            </div>
            { this.props.url2 ? 
              <div className="row">
                <a href={this.props.url2}> { this.props.title2 }</a>
              </div>
            : null }
          </figcaption>
        </figure>
      </div>
    )
  }
}

PortfolioItem.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  url2: PropTypes.string,
  title2: PropTypes.string,
  id: PropTypes.string.isRequired
}

export default PortfolioItem
