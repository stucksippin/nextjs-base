
import React from 'react'
import { PrismaClient } from '@prisma/client'



import RoomsAdmin from '@/app/components/admin/RoomsAdmin'




const client = new PrismaClient()



async function getRooms() {

    return await client.rooms.findMany({
        select: {
            id: true,
            name: true,
            peopleMax: true,
            address: true,
            price: true,
            description: true
        }
    })
}

export default async function AdminPage() {
    const rooms = await getRooms()
    return (
        <div className='container'>

            <RoomsAdmin rooms={rooms} />

        </div>
    )
}
