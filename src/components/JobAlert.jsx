import React from "react";

const JobAlert = () => {
  return (
    <div className="jobalert">
      <h3>
        <strong>Lag jobbvarsel</strong>
      </h3>
      <p>
        <small>Lag en jobbvarsel og gå aldri glipp av en jobb</small>
      </p>
      <input className="mt-1" placeholder="minepost@jobb.no" />
      <input className="mt-1" placeholder="it, kokk, pleie" />
      <button className="button mt-1" onClick={() => alert("Kommer snart")}>
        Lag jobbvarsel
      </button>
    </div>
  );
};

export default JobAlert;
