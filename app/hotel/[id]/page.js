
import RoomInfo from '@/app/components/rooms/RoomInfo'
import { Calendar } from '@/components/ui/calendar'
import getRoomsById from '@/lib/getRoomsById'
import React from 'react'

export default async function RoomInfoPage({ params: { id } }) {
    const room = await getRoomsById(id)

    return (
        <div>
            <RoomInfo key={room.id} id={room.id} name={room.name} peopleMax={room.peopleMax} price={room.price} description={room.description} address={room.address} />


        </div>
    )
}



