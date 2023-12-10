


import DashboardNavbar from '../dashboard/DashboardNavbar'
import Dash from './Dash';

interface DoctorProps {
  children: any
  
}

export default function DoctorDashboard(props: DoctorProps) {

  return (
      <div>
          <div className="navbar-container"> 
              <DashboardNavbar> </DashboardNavbar>
          </div>    
          <Dash />
      </div>

  )



}
