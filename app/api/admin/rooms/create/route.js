import { PrismaClient } from "@prisma/client"

export async function PUT(request){
    const body = await request.formData()
    const data = Object.fromEntries(body)
    console.log(data)

    const prisma = new PrismaClient
    const resp = await prisma.rooms.create({
        data:{
            name: data.name,
            peopleMax: parseInt(data.maxPeople),
            address: data.address,
            price: parseInt(data.price),
            description: data.description
        }
    })

    return Response.json({
        result: "OK"
    })

}