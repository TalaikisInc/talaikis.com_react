import React, { PureComponent } from 'react'

class Whatwedo extends PureComponent {
  render() {
    return (
      <section className="container-fluid sdm-bg" id="expertness">
        <div className="row">
          <div className="col-sm-12">
            <h3 className="text-center"><i className="fa fa-bookmark"></i>What I Do</h3>
          </div>
        </div>
        <section className="container">
          <div className="row">
            <div className="col-sm-4 col-xs-6">
              <div className="block">
                <i className="fa fa-mobile fa-3x"></i>
                <h4 className="text-uppercase">Mobile Apps</h4>
                <p>
                  React Native or Ionic mobile apps.
                </p>
              </div> 
            </div>
            <div className="col-sm-4 col-xs-6">
              <div className="block">
                <i className="fa fa-code fa-3x"></i>
                <h4 className="text-uppercase">Web apps</h4>
                <p>
                  Node.js, React.js, Django static and universal (server rendered) web apps.
                </p>
              </div> 
            </div>
            <div className="col-sm-4 col-xs-6">
              <div className="block">
                <i className="fa fa-sitemap fa-3x"></i>
                <h4 className="text-uppercase">APIs</h4>
                <p>
                  REST and GraphQL APIs on Node.js and almost any database you need (Postgres, MySQL, MongoDB, IngluxDB, CocroachDB, Kafka, Ethereum, simple JSON on disk, etc.), including caching layers (Redis, memcached) and any needed backend services, like Elastic Search, WebDAV, etc.
                </p>
              </div> 
            </div>
            <div className="col-sm-4 col-xs-6">
              <div className="block">
                <i className="fa fa-flask fa-3x"></i>
                <h4 className="text-uppercase">Testing</h4>
                <p>
                  Technical (unit, interation) and non-functional (performance, load, usability, reliability) testing.
                </p>
              </div> 
            </div>
            <div className="col-sm-4 col-xs-6">
              <div className="block">
                <i className="fab fa-aws fa-3x"></i>
                <h4 className="text-uppercase">DevOps</h4>
                <p>
                  Docker, Kubernetes, AWS (Lambda, API Gateway, S3, Cloudfront, EC2, etc.) and simpler custom (Bash or Python) solutions.
                </p>
              </div>
            </div>
            <div className="col-sm-4 col-xs-6">
              <div className="block">
                <i className="fa fa-atom fa-3x"></i>
                <h4 className="text-uppercase">Other</h4>
                <p>
                  Additional machine and deep learning, professional photography, aerial photography solutions.
                </p>
              </div> 
            </div>
          </div>
        </section>
      </section>
    )
  }
}

export default Whatwedo
