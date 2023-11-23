import { ReactElement, JSXElementConstructor, ReactNode, ReactPortal, PromiseLikeOfReactNode } from "react";
import './DashboardModals.css'


interface Props {

    children: string
    title: string
    description: string
    

}

export default function DashboardModals(props: Props) {


    return (

        <div className="card w-96 bg-neutral text-neutral-content">
            <div className="card-body items-center text-center">
                <h2 className="card-title">{props.title}</h2>
                <p>{props.description}</p>
                
            </div>
      </div>
        

    )


}