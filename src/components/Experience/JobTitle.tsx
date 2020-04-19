import * as React from 'react';

export default function JobTitle(props) {
  return (
    <div className="timeline-heading">
      <h4>{props.company}</h4>
      <h4 className="subheading">{props.title}</h4>
    </div>
  );
}