import React from "react";
import Detail from "./Detail";
function Entry(props) {
  return (
    <div className="term">
      <dt>
        <span className="emoji" role="img" aria-label="Tense Biceps">
          {props.emo}
        </span>
        <Detail detailInfo={props.name} />
      </dt>
      <dd>{props.meaning}</dd>
    </div>
  );
}
export default Entry;
