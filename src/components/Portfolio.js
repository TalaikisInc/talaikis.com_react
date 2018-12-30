import React, { PureComponent } from 'react'
import { Nav, NavItem, NavLink } from 'reactstrap'
import classnames from 'classnames'

import PortfolioItem from 'components/PortfolioItem'
import { projectsMap } from 'utils'

class Portfolio extends PureComponent {
  constructor(props) {
    super(props)

    this.state = {
      activeTab: '1',
      modal: false
    }

    this.getItems = this.getItems.bind(this)
  }

  getItems = (query) => {
    const chosen = query !== 'all' ? projectsMap.filter((el) => {
      return el.type === query
    }) : projectsMap

    const items =  chosen.map((e) => (
      <PortfolioItem
        title={e.title}
        text={e.description}
        key={e.title}
        id={e.title}
        image={e.image}
        url={e.url}
        url2={e.url2 ? e.url2 : undefined}
        title2={e.title2 ? e.title2 : undefined} />
    ))

    return items
  }

  render() {
    return (
      <section className="container position-relative" id="portfolio">
        <div className="row">
          <div className="col-sm-10 col-sm-offset-1 position-absolute">
            <div className="text-center filter-btns">
              <ul className="nav nav-pills">
                <Nav tabs>
                  <NavItem>
                    <NavLink className={classnames({ active: this.state.activeTab === '1' })} onClick={() => { this.setState({ activeTab: '1' }) }}>
                      All
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className={classnames({ active: this.state.activeTab === '2' })} onClick={() => { this.setState({ activeTab: '2' }) }}>
                      Web
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className={classnames({ active: this.state.activeTab === '3' })} onClick={() => { this.setState({ activeTab: '3' }) }}>
                      Mobile
                    </NavLink>
                  </NavItem>
                  <NavItem>
                    <NavLink className={classnames({ active: this.state.activeTab === '4' })} onClick={() => { this.setState({ activeTab: '4' }) }}>
                      Microservices
                    </NavLink>
                  </NavItem>
                </Nav>
              </ul>
            </div>
            <div className="row" id="mix-wrapper">
              <div id="effect-5">
                { this.state.activeTab === '1' ? this.getItems('all') : null }
                { this.state.activeTab === '2' ? this.getItems('web') : null }
                { this.state.activeTab === '3' ? this.getItems('mobile') : null }
                { this.state.activeTab === '4' ? this.getItems('microservices') : null }
              </div>
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Portfolio
