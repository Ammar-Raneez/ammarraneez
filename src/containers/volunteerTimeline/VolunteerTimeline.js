import React from 'react'
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './VolunteerTimeline.css';

function VolunteerTimeline({ work }) {
  return (
    <VerticalTimeline lineColor="#11111111" layout="1-column">
      {work.map((work, index) => (
        <VerticalTimelineElement
          key={index}
          className="vertical-timeline-element--work"
          contentArrowStyle={{ borderRight: `7px solid ${work.bgColor}` }}
          date={work.duration}
          iconStyle={{ backgroundColor: work.bgColor }}
          contentStyle={{ borderTop: `4px solid ${work.headColor}` }}
        >
          <h3
            className="vertical-timeline-element-title"
            style={{ color: work.headColor }}
          >
            {work.title}
          </h3>
          <h4
            className="vertical-timeline-element-subtitle"
            style={{ color: work.bgColor }}
          >
            {work.company}
          </h4>
          <img
            src={require(`../../assests/images/${work.logo_path}`)}
            style={{ width: '70px', objectFit: 'contain', marginTop: '10px' }}
            alt={work.company}
          />
          <p>
            {work.description}
          </p>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  )
}

export default VolunteerTimeline