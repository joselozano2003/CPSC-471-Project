import { db } from "@/utils/prisma"
import { AppUser } from "@prisma/client"



// Function to check if a user registration is complete
export async function isUserComplete(email: string) {
    const user = await db.appUser.findUnique({
        where: {
            id: email
        }
    })

    console.log(user)

    
    if (!user) {
        return false
    }

    if (user.firstName && user.lastName && user.phone && user.address) {
        if (user.isPatient || user.isStaff){
            return true
        }
    }

    return false
    
}