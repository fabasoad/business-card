import * as React from 'react';

export default function ExperienceTimeline(props) {
  return (
    <div className="timeline-image">
      <h4>
        <span className="mr-1">{props.toMonth}</span>
        <span>{props.toYear}</span>
        <br />- <br />
        <span className="mr-1">{props.fromMonth}</span>
        <span>{props.fromYear}</span>
      </h4>
    </div>
  );
}