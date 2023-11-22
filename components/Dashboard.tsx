import DashBoardNavbar from "./DashboardNavbar"


interface Props {
    children: any
}

export default function Dashboard(rpops: Props) {


    return (

        <div>

            <DashBoardNavbar title="Medical Reports" description="View your medical reports here"> </DashBoardNavbar>

        </div>

    )



}