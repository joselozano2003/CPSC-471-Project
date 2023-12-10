import { db } from "@/utils/prisma"


export function isUserComplete(email: string) {
    const user = db.appUser.findUnique({
        where: {
            email: email
        }
    })

    if (!user) {
        return false
    }

    

}