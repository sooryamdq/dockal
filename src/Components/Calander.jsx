import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import default styles

function MyCalendar() {
  const [date, setDate] = useState(new Date());

  const onChange = (date) => {
    setDate(date);
  };
  return (
    <div className="calendar-container custom-calendar ">
      <div className="calendar">
        <div className="calendar-header flex justify-center w-full lg:absolute lg:bottom-2 bottom-4 z-50 ">
          <Calendar
            onChange={onChange}
            value={date}
            className="calendar-day" // Apply custom class to calendar component
          />
        </div>
      </div>
    </div>
  );
}

export default MyCalendar;
