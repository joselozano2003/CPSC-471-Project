import Dash from "./Dash";
import DashboardNavbar from "./DashboardNavbar";


import './page.css'

interface Props {
    children: any
    
}

export default function Dashboard(props: Props) {

    return (

        <div>

            <div className="navbar-container"> 
                <DashboardNavbar> </DashboardNavbar>
            </div>
            <Dash />

            
        </div>
    )
}
