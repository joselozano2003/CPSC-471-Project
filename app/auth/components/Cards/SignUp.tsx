"use client";

import SignUpForm from "./Forms/SignUpForm";

import Image from "next/image";
import cover from "@/public/hospital.png"

export default function SignUp(){
    return (
        <div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <div className="card-body justify-center">
                        <SignUpForm/>
                </div>
                <figure><Image src={cover} alt="Album" width={400} height={400}/></figure>
            </div>
        </div>
    )
}