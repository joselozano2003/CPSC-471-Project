import { NextResponse, NextRequest } from "next/server";

import { db } from "@/utils/prisma"; 

export async function POST(request: NextRequest) {
    const data = await request.json();

    const { userEmail, firstName, lastName, phone, address, birthDate, emergencyName, emergencyPhone, sex, isPatient, isStaff} = data;

    // Check if entry exists
    const user = await db.appUser.findUnique({
        where: {
            id: userEmail
        }
    })

    // If entry does not exist, create new entry
    if (!user) {
        // Create new entry
        const createUser = await db.appUser.create({
            data: {
                id: userEmail,
                firstName: firstName,
                lastName: lastName,
                gender: sex,
                phone: phone,
                address: address,
                birthDate: birthDate,
                emergencyContactName: emergencyName,
                emergencyContactPhone: emergencyPhone,
                isPatient: isPatient,
                isStaff: isStaff
            }
        })

        if (!createUser) {
            return NextResponse.json({error: "Error creating user", status: 500})
        }

        return NextResponse.json({status: 200})
    }

    else {
        // Modify existing entry

        const modifyUser = await db.appUser.update({
            where: {
                id: userEmail
            },
            data: {
                id: userEmail,
                firstName: firstName,
                lastName: lastName,
                gender: sex,
                phone: phone,
                address: address,
                birthDate: birthDate,
                emergencyContactName: emergencyName,
                emergencyContactPhone: emergencyPhone,
                isPatient: isPatient,
                isStaff: isStaff
            }
        })

        if (!modifyUser) {
            return NextResponse.json({error: "Error modifying user", status: 500})
        }

        return NextResponse.json({status: 200})
    }

}