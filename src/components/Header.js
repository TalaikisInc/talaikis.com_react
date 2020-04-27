import React, { PureComponent, Fragment } from 'react'
import { Helmet } from 'react-helmet'

import SocialIcon from 'components/SocialIcon'
import profile from 'assets/images/profile.jpg'

class Header extends PureComponent {
  render () {
    const { title, slug } = this.props
    const url = slug ? `https://talaikis.com${slug}` : 'https://talaikis.com'

    return (
      <Fragment>
        <Helmet>
          <meta charSet="utf-8" />
          <title>{ title }</title>
          <link rel="canonical" href={url} />
        </Helmet>
        <header className="container-fluid sdm-bg" id="home">
          <div className="row">
            <ul className="nav nav-pills menu-center margin-top-30 scroll-nav">
              <li role="presentation" className="active"><a href="#home"><i className="fa fa-home"></i></a></li>
              <li role="presentation"><a href="https://talaikis.com/#about_me">About</a></li>
              <li role="presentation"><a href="https://talaikis.com/#portfolio">Portfolio</a></li>
              {/* <li role="presentation"><a href="#reviews">Reviews</a></li> */}
              <li role="presentation"><a href="https://talaikis.com/#expertness">Services</a></li>
              <li role="presentation"><a href="#contact_me">Contact</a></li>
              <li role="presentation"><a href="https://blueblood.talaikis.com">Blog</a></li>
            </ul>
            <img src={profile} className="margin-top-76 img-circle center-block profile_picture" alt="Profile" />
            <h1 className="text-capitalize text-center">Tadas Talaikis</h1>
            <h3 className="text-capitalize text-center">Software Engineer</h3>
            <hr />
            <div className="text-center margin-bottom-135">
              <ul className="social-networks spin-icon">
                <SocialIcon network="linkedin" url="https://www.linkedin.com/in/xenu255/" />
                <SocialIcon network="github" url="https://github.com/TalaikisInc" />
                <SocialIcon network="medium" url="https://medium.com/@dxenu" />
                <SocialIcon network="facebook" url="https://www.facebook.com/talaikis" />
                { /* <SocialIcon network="twitter" url="https://twitter.com/Talaikis" /> */ }
              </ul>
            </div>
          </div>
        </header>
      </Fragment>
    )
  }
}

export default Header
