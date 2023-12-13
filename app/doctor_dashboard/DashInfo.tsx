//This is the component that is called when you click on "Medical Reports", "View appointments", and similar divs

import DashboardTable from './DashTable';
import './DashboardInfo.css'
import { useEffect, useState } from "react";


interface Props {
    title: string
    closeModal:  ()=>void
    data: any
}

export default function DashboardInfo(props: Props) {

    return (
        <div className="table-container">
            <h1> {props.title}</h1>
            <DashboardTable data={props.data}/>
            <button className="btn btn-primary" onClick={props.closeModal}>Close Modal</button>
        </div>  
    )
}