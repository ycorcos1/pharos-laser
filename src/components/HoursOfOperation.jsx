import React from 'react';
import '../styles/HoursOfOperation.css';

const HoursOfOperation = () => {
  const days = [
    { day: 'Monday', hours: '7:00 am - 7:00 pm' },
    { day: 'Tuesday', hours: '7:00 am - 7:00 pm' },
    { day: 'Wednesday', hours: '7:00 am - 7:00 pm' },
    { day: 'Thursday', hours: '7:00 am - 7:00 pm' },
    { day: 'Friday', hours: '7:00 am - 3:30 pm' },
  ];

  return (
    <div className="hours-container">
      <div className="hours">
        {days.map((day, index) => (
          <React.Fragment key={index}>
            <div className="day">
              <span className="day-name">{day.day.toUpperCase()}</span>
              <span className="day-hours">{day.hours}</span>
            </div>
            {index < days.length - 1 && <div className="divider"></div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default HoursOfOperation;
