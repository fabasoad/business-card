import * as React from 'react'

interface PortfolioItemProps {
  img: any
  name: string
  subtitle: string
  title: string
  url: string
}

export default function PortfolioItem(props: PortfolioItemProps) {
  return (
    <div className="col-sm-6 col-md-3 col-lg-3 web">
      <div className="portfolio-item">
        <div className="hover-bg text-center">
          <a href={props.url} title={props.name} rel="noopener noreferrer" target="_blank">
            <div className="hover-text">
              <h4>{props.title}</h4>
              <small>{props.subtitle}</small>
              <i className="fa fa-search"></i>
            </div>
            <img className="img-thumbnail" src={props.img} alt={props.name} />
          </a>
        </div>
      </div>
    </div>
  )
}
