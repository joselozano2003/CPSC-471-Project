"use client";
import SignUpForm from "./Forms/SignUpForm";

import Image from "next/image";
import cover from "@/public/hospital2.png"
import LogInForm from "./Forms/LogInForm";


export default function LogIn(){
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><Image src={cover} alt="Album" width={400} height={400}/></figure>
                <div className="card-body justify-center">
                        <LogInForm/>
                </div>
            </div>
        </div>
    )
}