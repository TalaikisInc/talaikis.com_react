import React, { PureComponent, Fragment } from 'react'
import { post } from 'axios'

import Async from 'components/Async'
const Social = Async(() => import('components/Social'))

const apiUrl = process.env.REACT_APP_CONTACT_API
const apiKey = process.env.REACT_APP_API_KEY

class ContactUs extends PureComponent {
  constructor(props) {
    super(props)
    this.state = {
      sent: false,
      email: '',
      name: '',
      msg: '',
      error: undefined,
      loading: false
    }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange = (event) => {
    const { target, option } = event
    const { value, name } = target

    ;(option) ? this.setState({
      [name]: option.value ? option.value : ''
    }) : this.setState({
      [name]: value
    })
  }

  handleChange = (event) => {
    const { target, option } = event
    const { value, name } = target

    ;(option) ? this.setState({
      [name]: option.value ? option.value : ''
    }) : this.setState({
      [name]: value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.setState({ loading: true })
    const name = this.state.name
    const msg = this.state.msg
    const email = this.state.email
    if (name.length >= 0 && msg.length >= 0 && email.indexOf('@')  > -1) {
      post(`${apiUrl}/contact-us`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
        },
        email,
        msg,
        name,
        key: apiKey
      }).then((res) => {
        if (res.data.status === 'sent') {
          this.setState({ sent: true })
        } else {
          this.setState({ sent: false, error: res.data.status })
        }
      }).catch((error) => {
        this.setState({ error:  error.message })
      })
    } else {
      this.setState({ error: 'Not all required information entered.' })
    }
    this.setState({ loading: false })
  }

  render() {
    const errors = (
      <section className="col-sm-10 col-sm-offset-1">
        <div className="row">
          <div className="col-sm-12 text-center text-capitalize">
            { this.state.error ? this.state.error : <h3>Thank you, email is sent, I will answer you as soon as possible.</h3> }
          </div>
        </div>
      </section>
    )

    const form = (
      <section className="col-sm-10 col-sm-offset-1">
        <div className="row text-center">
          <div className="col-sm-4 col-xs-12">
            <div className="block">
              <i className="fa fa-envelope fa-2x"></i>
              <h4 className="text-uppercase">Cell / Whatsapp</h4>
              <ul className="list-unstyled">
                <li><a href="https://wa.me/447460271365" target="_blank" rel="nofollow noopener noreferrer">+44 74 6027-1365</a></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-4 col-xs-6">
            <div className="block">
              <i className="fa fa-phone fa-2x"></i>
              <h4 className="text-uppercase">Email</h4>
              <ul className="list-unstyled">
                <li>info@talaikis.com</li>
              </ul>
            </div> 
          </div>
          <div className="col-sm-4 col-xs-6">
            <div className="block">
              <i className="fa fa-home fa-2x"></i>
              <h4 className="text-uppercase">Projects</h4>
              <ul className="list-unstyled">
                <li><a href="https://blockchain.talaikis.com" title="Blockchain Development">Blockchain Development</a></li>
                <li><a href="https://blueblood.talaikis.com" title="Trading Blog">Trading Blog</a></li>
              </ul>
            </div> 
          </div>
        </div>
        <form className="row" onSubmit={this.handleSubmit}>
          <div className="col-sm-6 col-xs-12">
            <div className="form-group">
              <label htmlFor="your_name">Your Name</label>
              <input type="text" className="form-control" id="your_name" name="name" placeholder="John" onChange={this.handleChange} />
            </div>
            <div className="form-group">
              <label htmlFor="your_email">Your Email</label>
              <input type="email" className="form-control" id="your_email" name="email" placeholder="john@smith.com" onChange={this.handleChange} />
            </div>
          </div>
          <div className="col-sm-6 col-xs-12">
            <div className="form-group">
              <label htmlFor="your_message">Your Message</label>
              <textarea className="form-control" rows="5" name="msg" placeholder="Hey, what about going for a beer and discuss a project?" onChange={this.handleChange}></textarea>
            </div>
          </div>
          { !this.state.loading ?
          <div className="col-sm-12 text-center margin-top-55 margin-bottom-55">
            <button className="btn btn-orange">Send</button>
          </div>
          : <Fragment>Working...</Fragment>
          }
        </form>
      </section>
    )

    return (
      <section className="container-fluid sdm-bg" id="contact_me">
        <div className="row">
          <div className="col-sm-12 text-center text-capitalize">
            <h3>Want to get in touch?</h3>
            <h4>If you want to hire me for a project, just drop me a note!</h4>
            <hr />
          </div>
        </div>
        { !this.state.sent ? form : errors }
        { this.state.error ? this.state.error : null }
        <div className="row text-center">
          <Social />
        </div>
    </section>
    )
  }
}

export default ContactUs
