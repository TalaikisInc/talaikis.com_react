import React, { PureComponent, Fragment } from 'react'
// import AdSense from 'react-adsense'
import Async from 'components/Async'
const Header = Async(() => import('components/Header'))
const Portfolio = Async(() => import('components/Portfolio'))
// const Testimonials = Async(() => import('components/Testimonials'))
const About = Async(() => import('components/About'))
const Whatwedo = Async(() => import('components/Whatwedo'))
const ContactUs = Async(() => import('components/ContactUs'))
const Hire = Async(() => import('components/Hire'))
// <AdSense.Google client='ca-pub-2578395398126606' />

class App extends PureComponent {
  render() {
    return (
      <Fragment>
        <Header />
        { /* <Testimonials /> */ }
        <About />
        <Portfolio />
        <Whatwedo />
        <Hire />
        <ContactUs />
      </Fragment>
    )
  }
}

export default App