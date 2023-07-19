import React from 'react'
import { useState } from 'react';
import 'react-calendar/dist/Calendar.css'
import './Calendarr.css'
import Calendar from 'react-calendar'

const Calendarr = () => {
  const [date, setDate] = useState(new Date())
  return (
    <div className="app">
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date} />
      </div>
    </div>
  )
}

export default Calendarr