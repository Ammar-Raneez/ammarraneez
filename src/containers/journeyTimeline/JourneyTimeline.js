import React, { useState } from "react";
import { Fade } from "react-reveal";
import { journey } from "../../portfolio";
import "./JourneyTimeline.css";

function JourneyTimeline() {
  const [classnames] = useState([
    "timeline__event animated fadeInUp delay-3s timeline__event--type1",
    "timeline__event animated fadeInUp delay-2s timeline__event--type2",
    "timeline__event animated fadeInUp delay-1s timeline__event--type3",
  ]);

  return (
    <div className="timeline">
      {journey.completeJourney.map((journey, index) => (
          <div key={journey.id} className={classnames[index % classnames.length]}>
            <div className="timeline__event__icon "></div>
            <div className="timeline__event__date">{journey.date}</div>
            <div className="timeline__event__content ">
              <div className="timeline__event__description">
                {journey.description.map((desc) => (
                  <p key={desc}>{desc}</p>
                ))}
              </div>
            </div>
          </div>
      ))}
    </div>
  );
}

export default JourneyTimeline;
