import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker, { Day, DayRange, DayValue } from "react-modern-calendar-datepicker";
import { useState } from "react";
import React from "react";
import "./ApptScheduler.css"

//Install calender package: npm i react-modern-calendar-datepicker


export default function AppointmentScheduler() {

    const [day, setDay] = React.useState<DayValue>(null);

    return (

        <div className="container-center">

            <input type="text" placeholder="Type here" className="input input-bordered input-info w-full max-w-xs" />

            
            
            
            <DatePicker value={day} onChange={setDay} />
      

        </div>
        

        

    )

}