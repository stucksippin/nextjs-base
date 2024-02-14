import React from 'react'
import { PrismaClient } from '@prisma/client'
import RoomListFilter from '../components/rooms/RoomListFilter'

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

async function getMaxMinPrice() {
    const minMax = await client.rooms.aggregate({
        _min: { price: true },
        _max: { price: true }
    })
    return minMax

}
export default async function HotelRooms() {

    const rooms = await getRooms()
    const minMax = await getMaxMinPrice()

    return (

        <div>
            <RoomListFilter rooms={rooms} minMax={minMax} />
        </div>
    )
}

