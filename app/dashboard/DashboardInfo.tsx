//This is the component that is called when you click on "Medical Reports", "View appointments", and similar divs

import DashboardTable from "./DashboardTable"
import './DashboardInfo.css'
import { useEffect, useState } from "react";


interface Props {
    title: string
    closeModal:  ()=>void
}



export default function DashboardInfo(props: Props) {


    return (


        <div className="table-container">

            <h1> {props.title}</h1>

            <DashboardTable> </DashboardTable>
            <button className="btn btn-primary" onClick={props.closeModal}>Close Modal</button>
        </div>  

    )
}