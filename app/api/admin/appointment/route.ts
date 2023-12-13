import { NextResponse, NextRequest } from "next/server";

import { db } from "@/utils/prisma"; 


export async function POST(request: NextRequest) {

    const data = await request.json();

    const { userEmail, docEmail, notes, location, appointmentStartPro, appointmentEndPro, adminEmail } = data;

    console.log(data);


    const patient = await db.patient.findMany({
        where: {
            userId: userEmail
        }
    });

    if (patient.length == 0) {
        return NextResponse.json({error: "Error finding patient", status: 500})
    }

    try{
        const appointment = await db.appointment.create({
            data: {
                patientId: patient[0].id,
                physicianId: docEmail,
                notes: notes,
                location: location,
                startDate: appointmentStartPro,
                endDate: appointmentEndPro,
                adminId: adminEmail
            }
        })

        console.log(appointment)

        return NextResponse.json({status: 200})
    }
    catch(e) {
        console.log(e)
        console.log("Error creating appointment")
        return NextResponse.json({error: "Error creating appointment", status: 500})
    }

  

    

    return NextResponse.json({status: 200})
}