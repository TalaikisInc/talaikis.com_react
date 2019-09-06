import React, { PureComponent, Fragment } from 'react'
import ReactGA from 'react-ga'

import Async from 'components/Async'
const Portfolio = Async(() => import('components/Portfolio'))
// const Testimonials = Async(() => import('components/Testimonials'))
const About = Async(() => import('components/About'))
const Whatwedo = Async(() => import('components/Whatwedo'))
const Header = Async(() => import('components/Header'))
const ContactUs = Async(() => import('components/ContactUs'))
const Hire = Async(() => import('components/Hire'))

class Home extends PureComponent {
  initGA () {
    ReactGA.initialize(process.env.GA_TRACKING_ID)
    // console.log('Initialized')
  }

  logPageView () {
    ReactGA.set({ page: window.location.pathname })
    ReactGA.pageview(window.location.pathname)
    // console.log(`Logged: ${window.location.pathname}`)
  }

  componentDidMount () {
    if (process.env.NODE_ENV === 'production') {
      if (!window.GA_INITIALIZED) {
        this.initGA()
        window.GA_INITIALIZED = true
      }
      this.logPageView()
    }
  }

  render() {
    return (
      <Fragment>
        <Header title="Software Engineering Company | Talaikis Ltd." />
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

export default Home
