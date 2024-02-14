'use client'
import React, { useState } from 'react'

import RoomFilter from './RoomFilter'
import RoomCard from './RoomCard'
import Link from 'next/link'

export default function RoomListFilter({ rooms, minMax }) {
    const [Rooms, setRooms] = useState(rooms)
    return (

        <div>
            <div>
                <RoomFilter setRooms={setRooms} minPrice={minMax._min.price} maxPrice={minMax._max.price} />
            </div>

            <div className='flex container justify-between mx-auto flex-wrap gap-y-8'>

                {
                    Rooms.map((room) => (
                        <RoomCard
                            key={room.id}
                            id={room.id}
                            name={room.name}
                            peopleMax={room.peopleMax}
                            price={room.price}
                            address={room.address}
                            description={room.description}
                        />

                    ))
                }

            </div>
        </div>
    )
}
