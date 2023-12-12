import { NextResponse, NextRequest } from "next/server";
import { db } from "@/utils/prisma";

export async function POST(request: NextRequest) {

    const data = await request.json();

    const {recordId, testId, notes, treatment, diagnostic, appointment} = data;

    console.log(data);

    if (!diagnostic) {
        console.log("Diagnostics is required");
        return NextResponse.json({ status: 400, message: 'Diagnostics is required' });
    }

    try {
        console.log("Creating new report");
        const newReport = await db.medicalReport.create({
            data: {
                medicalRecordId: Number(recordId),
                medicalTestId: testId,
                notes: notes,
                treatment: treatment,
                diagnostics: diagnostic,
                date: appointment
            }
        })   

        console.log(newReport);
        return NextResponse.json({status: 200});
    }
    catch (e) {
        console.log(e);
        return NextResponse.json({status: 500});
    }
}