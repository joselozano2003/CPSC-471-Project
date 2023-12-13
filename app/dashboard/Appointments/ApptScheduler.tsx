import "@hassanmojab/react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, { DayValue } from "@hassanmojab/react-modern-calendar-datepicker";
import { useState } from "react";
import React from "react";
import "./ApptScheduler.css"

//Install calender package: npm i react-modern-calendar-datepicker


export default function AppointmentScheduler() {

    const [day, setDay] = React.useState<DayValue>(null);

    return (

        <div className="container-center">

            <label> Name: </label>
            <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />

            
            
            <div className="calendar-container">

            <DatePicker value={day} onChange={setDay} />

            </div>
            
      

        </div>
        

        

    )

}