import * as React from 'react';

export default function PortfolioItem(props) {
  return (
    <div className="col-sm-6 col-md-3 col-lg-3 web">
      <div className="portfolio-item">
        <div className="hover-bg text-center">
          <a href={props.url} title={props.name} target="_blank">
            <div className="hover-text">
              <h4>{props.title}</h4>
              <small>{props.subtitle}</small>
              <div className="clearfix"></div>
              <i className="fa fa-search"></i>
            </div>
            <img className="img-thumbnail" src={props.img} alt={props.name} />
          </a>
        </div>
      </div>
    </div>
  );
}