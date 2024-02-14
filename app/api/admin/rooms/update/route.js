import { PrismaClient } from "@prisma/client"

export async function PATCH(request) {
    const body = await request.formData()
    const data = Object.fromEntries(body)
    console.log(data)

    const prisma = new PrismaClient
    const resp = await prisma.rooms.update({
        data: {
            name: data.name,
            peopleMax: parseInt(data.maxPeople),
            address: data.address,
            price: parseInt(data.price),
            description: data.description
        },
        where: {
            id: parseInt(data.id)
        }
    })

    if (resp) {
        return Response.json({
            result: "OK"
        })
    } else {
        return Response.json({
            result: "fail"
        })
    }

}