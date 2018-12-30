import React, { PureComponent } from 'react'

class About extends PureComponent {
  render() {
    return (
      <section className="container" id="about_me">
        <div className="row">
          <div className="col-md-10 col-md-offset-1 col-sm-12">
            <div className="row">
              <div className="col-md-6 col-sm-4 col-xs-12">
                <h3><i className="fa fa-user"></i>About</h3>
                <div className="block">
                  <p>
                    I am a software engineer with 4+ years of developer and 15 years of business expeirence.
                  </p>
                  <p>
                    If you have an idea, and you need someone to bring it ot life or already have a product that needs to be edited, reviewed, refactored or optimized, then I will be able to help you with my knowledge and modern software engineering solutions. 
                    Let's have a chat and discuss what you want.
                  </p>
                </div>
              </div>
              <div className="col-md-6 col-sm-4 col-xs-6">
                <h3><i className="fa fa-building"></i>History</h3>
                <div className="block">
                  <h4>Full stack developer</h4>
                  <ul className="icon-list">
                    <li><i className="fa fa-building"></i> Blueblood Ltd.</li>
                    <li><i className="fa fa-clock-o"></i> 2017-Present</li>
                  </ul>
                </div> 
                <div className="block">
                  <h4> Full stack developer</h4>
                  <ul className="icon-list">
                    <li><i className="fa fa-building"></i> Quantrade Ltd.</li>
                    <li><i className="fa fa-clock-o"></i> 2015-2017</li>
                  </ul>
                </div> 
                <div className="block">
                  <h4>Systems administrator, IT manager, Product manager, Founder</h4>
                  <ul className="icon-list">
                    <li><i className="fa fa-building"></i> Nakagava Ltd.</li>
                    <li><i className="fa fa-clock-o"></i> 2005-2015</li>
                  </ul>
                </div>
              </div>
              { /* education */ }
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default About
