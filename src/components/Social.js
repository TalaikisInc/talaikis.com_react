import React, { PureComponent } from 'react'
import Copyright from 'components/Copyright'
import SocialIcon from 'components/SocialIcon'

class Social extends PureComponent {
  render() {
    return (
        <div className="text-center row">
        <div className="col-sm-12">
          <ul className="social-networks spin-icon">
              <SocialIcon network="linkedin" url="https://www.linkedin.com/in/xenu255/" />
              <SocialIcon network="github" url="https://github.com/TalaikisInc" />
              <SocialIcon network="medium" url="https://medium.com/@dxenu" />
              <SocialIcon network="facebook" url="https://www.facebook.com/talaikis.tadas" />
              <SocialIcon network="twitter" url="https://twitter.com/Talaikis" />
          </ul>
          <Copyright />
       </div>
     </div>
    )
  }
}

export default Social
