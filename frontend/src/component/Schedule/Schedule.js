import React from "react";
import "./Schedule.css";
const Schedule = () => {
  return (
    <div className="schedules-container">
      <h1>Transportation Schedules</h1>
      <p>Click the links below to access the schedules:</p>
      <div className="schedule-links">
        <a
          href="https://juniv.edu/center/4206/file/5676"
          target="_blank"
          rel="noopener noreferrer"
        >
          Teacher Schedule
        </a>
        <a
          href="https://juniv.edu/center/4206/file/5677"
          target="_blank"
          rel="noopener noreferrer"
        >
          Student Schedule
        </a>
      </div>
    </div>
  );
};

export default Schedule;
