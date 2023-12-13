import { NextResponse, NextRequest } from "next/server";

import { db } from "@/utils/prisma"; 


export async function POST(request: NextRequest) {

    const data = await request.json();

    const { userEmail, docEmail, medicalReportId, testName, location, appointmentStart, adminEmail } = data;

    console.log(data);

    try {
        const patient = await db.patient.findMany({
            where: {
                userId: userEmail
            }
        });

        if (patient.length == 0) {
            return NextResponse.json({error: "Error finding patient", status: 500})
        }

        const doctor = await db.physician.findMany({
            where: {
                id: docEmail
            }
        });

        if (doctor.length == 0) {
            return NextResponse.json({error: "Error finding doctor", status: 500})
        }

        const medicalReport = await db.medicalReport.findMany({
            where: {
                id: Number(medicalReportId)
            }
        });

        if (medicalReport.length == 0) {
            return NextResponse.json({error: "Error finding medical report", status: 500})
        }

        console.log(patient[0].id, docEmail, medicalReportId, testName, location, appointmentStart, adminEmail)

        const labTest = await db.medicalTest.create({
            data: {
                patientId: Number(patient[0].id),
                physicianId: docEmail,
                medicalReportId: Number(medicalReportId),
                name: testName,
                location: location,
                date: appointmentStart,
                adminId: adminEmail
            }
        })

        console.log(labTest)
    }

    catch(e) {
        console.log(e)
        console.log("Error creating lab test")
        return NextResponse.json({error: "Error creating lab test", status: 500})
    }

    return NextResponse.json({status: 200})
}