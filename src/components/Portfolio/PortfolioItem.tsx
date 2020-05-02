import * as React from 'react';

export default function PortfolioItem({ img, name, title, subtitle, url }) {
  return (
    <div className="col-sm-6 col-md-3 col-lg-3 web">
      <div className="portfolio-item">
        <div className="hover-bg text-center">
          <a href={url} title={name} rel="noopener noreferrer" target="_blank">
            <div className="hover-text">
              <h4>{title}</h4>
              <small>{subtitle}</small>
              <i className="fa fa-search"></i>
            </div>
            <img className="img-thumbnail" src={img} alt={name} />
          </a>
        </div>
      </div>
    </div>
  );
}