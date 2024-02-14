import { PrismaClient } from "@prisma/client"


export default async function getRoomsById(id) {
    const prisma = new PrismaClient()
    return await prisma.rooms.findFirst({
        where: {
            id: parseInt(id)
        }
    })

}

