import React, { FC } from 'react'
import DashboardNavbar from '../dashboard/DashboardNavbar'
import ReactCalendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css';


interface indexProps {} 
const index: FC<indexProps> = ({}) => {
  return (
    <div>

      <DashboardNavbar> </DashboardNavbar>
      



      
      {/* <ReactCalendar 
        minDate = {new Date()}
        className='REACT-CALENDAR p-2' 
        view='month'
        onClickDay={(date) => console.log(date)} />  */}

    </div>

  )
}
export default  index
