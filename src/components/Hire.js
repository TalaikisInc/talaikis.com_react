import React, { PureComponent } from 'react'

class Hire extends PureComponent {
  render() {
    return (
      <section className="container" id="hire_me"> 
        <div className="row">
          <div className="col-sm-12 text-center">
            <h3>Need Any Help?</h3>
            <h4>I'm available for consulting and engineering.</h4>
            <nav className="cl-effect-2">
              <a href="#contact_me"><span data-hover="Hire Me">Hire Me</span></a>
            </nav>
          </div>
        </div>
      </section>
    )
  }
}

export default Hire
