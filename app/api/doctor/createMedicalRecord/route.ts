import { NextResponse, NextRequest } from "next/server";
import { db } from "@/utils/prisma";

export async function POST(request: NextRequest) {
    const data = await request.json();

    const {patientEmail, doctorEmail } = data;

    console.log(patientEmail, doctorEmail);


    const patient = await db.patient.findUnique({
        where: {
            userId: patientEmail
        }
    })

    console.log(patient);

    if (!patient) {
        return NextResponse.json({status: 404});
    }

    const record = await db.medicalRecord.findMany({
        where: {
            physicianId: doctorEmail,
            patientId: patient.id
        }
    })

    console.log(record);

    if (record.length > 0) {
        return NextResponse.json({status: 409});
    }
    else {
        console.log("Creating new record");

        try {
            const newRecord = await db.medicalRecord.create({
                data: {
                    patientId: patient.id,
                    physicianId: doctorEmail
                }
            })

            console.log(newRecord);
        }
        catch (e) {
            console.log(e);
            return NextResponse.json({status: 500});
        }



        return NextResponse.json({status: 200});
    }

}