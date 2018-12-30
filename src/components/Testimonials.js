import React, { PureComponent } from 'react'
import Async from 'components/Async'
const Quote = Async(() => import('components/Quote'))

class Testimonials extends PureComponent {
  render() {
    return (
      <section className="container-fluid sdm-bg" id="reviews">
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-md-12" data-wow-delay="0.2s">
                <div className="carousel slide" data-ride="carousel" id="quote-carousel">
                  <ol className="carousel-indicators">
                    <li data-target="#quote-carousel" data-slide-to="0" className="active"><img className="img-responsive " src="images/face1.jpg" alt="" />
                    </li>
                    <li data-target="#quote-carousel" data-slide-to="1"><img className="img-responsive" src="images/face2.jpg" alt="" />
                    </li>
                    <li data-target="#quote-carousel" data-slide-to="2"><img className="img-responsive" src="images/girl_face.png" alt="" />
                    </li>
                  </ol>
                  <div className="carousel-inner text-center">
                    <Quote text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. !" name="Danial Munsif" />
                    <Quote text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. !" name="Danial Munsif" />
                    <Quote text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. !" name="Danial Munsif" />
                  </div>
                  <a data-slide="prev" href="#quote-carousel" className="left carousel-control"><i className="fa fa-angle-left fa-2x"></i></a>
                  <a data-slide="next" href="#quote-carousel" className="right carousel-control"><i className="fa fa-angle-right fa-2x"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Testimonials
