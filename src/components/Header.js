import React, { PureComponent } from 'react'
import SocialIcon from 'components/SocialIcon'
import profile from 'assets/images/profile.jpg'

class Header extends PureComponent {
  render() {
    return (
      <header className="container-fluid sdm-bg" id="home">
        <div className="row">
          <ul className="nav nav-pills menu-center margin-top-30 scroll-nav">
            <li role="presentation" className="active"><a href="#home"><i className="fa fa-home"></i></a></li>
            <li role="presentation"><a href="#about_me">About</a></li>
            <li role="presentation"><a href="#portfolio">Portfolio</a></li>
            {/* <li role="presentation"><a href="#reviews">Reviews</a></li> */}
            <li role="presentation"><a href="#expertness">Services</a></li>
            <li role="presentation"><a href="#contact_me">Contact</a></li>
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
              <SocialIcon network="facebook" url="https://www.facebook.com/talaikis.tadas" />
              <SocialIcon network="twitter" url="https://twitter.com/Talaikis" />
            </ul>
          </div>
        </div>
      </header>
    )
  }
}

export default Header
